import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-zoho-signature",
};

interface ZohoWebhookPayload {
  [key: string]: unknown;
}

// Constant-time string comparison to prevent timing attacks
function secureCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

// Generate HMAC-SHA256 signature for webhook validation
async function generateSignature(payload: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Only accept POST requests
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Get the webhook secret for validation
    const webhookSecret = Deno.env.get("ZOHO_WEBHOOK_SECRET");
    
    // If webhook secret is configured, validate the signature
    if (webhookSecret) {
      const signature = req.headers.get("x-zoho-signature");
      
      if (!signature) {
        console.error("Missing webhook signature");
        return new Response(
          JSON.stringify({ error: "Unauthorized - Missing signature" }),
          {
            status: 401,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }

      // Clone the request to read body for signature verification
      const bodyText = await req.clone().text();
      const expectedSignature = await generateSignature(bodyText, webhookSecret);
      
      if (!secureCompare(signature, expectedSignature)) {
        console.error("Invalid webhook signature");
        return new Response(
          JSON.stringify({ error: "Forbidden - Invalid signature" }),
          {
            status: 403,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }
      
      console.log("Webhook signature verified successfully");
    } else {
      console.warn("ZOHO_WEBHOOK_SECRET not configured - webhook validation disabled");
    }

    // Parse the webhook payload
    let payload: ZohoWebhookPayload;
    
    const contentType = req.headers.get("content-type") || "";
    
    if (contentType.includes("application/json")) {
      payload = await req.json();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await req.formData();
      payload = Object.fromEntries(formData.entries());
    } else {
      // Try to parse as JSON anyway
      const text = await req.text();
      try {
        payload = JSON.parse(text);
      } catch {
        payload = { raw_data: text };
      }
    }

    console.log("Received Zoho webhook payload:", JSON.stringify(payload));

    // Create Supabase client with service role for bypassing RLS
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase credentials");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert the submission into the database
    const { data, error } = await supabase
      .from("zoho_form_submissions")
      .insert({
        form_id: "wot-kareer-interest",
        submission_data: payload,
        submitted_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("Database insert error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to store submission", details: error.message }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Submission stored successfully:", data.id);

    // Trigger CRM sync for this submission
    try {
      const syncResponse = await fetch(`${supabaseUrl}/functions/v1/zoho-crm-sync`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${supabaseServiceKey}`,
        },
        body: JSON.stringify({ submission_id: data.id }),
      });

      const syncResult = await syncResponse.json();
      console.log("CRM sync result:", JSON.stringify(syncResult));
    } catch (syncError) {
      // Log but don't fail the webhook - the submission is already stored
      console.error("CRM sync error (non-fatal):", syncError);
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in zoho-webhook function:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
