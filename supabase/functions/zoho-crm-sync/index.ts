import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ZohoTokenResponse {
  access_token: string;
  api_domain: string;
  token_type: string;
  expires_in: number;
  error?: string;
}

interface ZohoLeadResponse {
  data?: Array<{
    code: string;
    details: {
      id: string;
    };
    message: string;
    status: string;
  }>;
  code?: string;
  message?: string;
  status?: string;
}

interface FormSubmission {
  id: string;
  submission_data: Record<string, unknown>;
  zoho_sync_status: string;
}

// Get fresh access token using refresh token
async function getAccessToken(): Promise<string> {
  const clientId = Deno.env.get("ZOHO_CLIENT_ID");
  const clientSecret = Deno.env.get("ZOHO_CLIENT_SECRET");
  const refreshToken = Deno.env.get("ZOHO_REFRESH_TOKEN");
  // Default to .in (India) but can be overridden with ZOHO_DOMAIN secret
  const zohoDomain = Deno.env.get("ZOHO_DOMAIN") || "zoho.in";

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Zoho OAuth credentials");
  }

  // Debug logging - show credential lengths (not values for security)
  console.log("Debug: Zoho credentials check:");
  console.log(`  - Client ID length: ${clientId.length}, starts with: ${clientId.substring(0, 10)}...`);
  console.log(`  - Client Secret length: ${clientSecret.length}`);
  console.log(`  - Refresh Token length: ${refreshToken.length}, starts with: ${refreshToken.substring(0, 10)}...`);
  console.log(`  - Using domain: ${zohoDomain}`);

  const tokenUrl = `https://accounts.${zohoDomain}/oauth/v2/token`;
  console.log(`  - Token URL: ${tokenUrl}`);

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    }),
  });

  const data: ZohoTokenResponse = await response.json();

  if (data.error || !data.access_token) {
    console.error("Token refresh failed:", data);
    console.error("Full Zoho response:", JSON.stringify(data));
    throw new Error(`Token refresh failed: ${data.error || "No access token returned"}`);
  }

  console.log("Successfully obtained fresh access token");
  return data.access_token;
}

// Map form submission data to Zoho CRM Lead format
function mapToZohoLead(submissionData: Record<string, unknown>): Record<string, unknown> {
  // Field mapping based on Zoho Form structure:
  // Field_1: Salutation, Field_2: First Name, Field_3: Last Name
  // Field_5: Email, Field_6: Phone
  // Field_10: Street, Field_11: City, Field_12: State, Field_13: Zip, Field_14: Country
  // Field_17/Field_18: Description fields
  
  const firstName = submissionData.Field_2 as string || "";
  const lastName = submissionData.Field_3 as string || "";
  const email = submissionData.Field_5 as string || "";
  const phone = submissionData.Field_6 as string || "";
  
  // Build address components
  const street = submissionData.Field_10 as string || "";
  const city = submissionData.Field_11 as string || "";
  const state = submissionData.Field_12 as string || "";
  const zipCode = submissionData.Field_13 as string || "";
  const country = submissionData.Field_14 as string || "";
  
  // Build description from additional fields
  const descriptionParts: string[] = [];
  if (submissionData.Field_17) descriptionParts.push(submissionData.Field_17 as string);
  if (submissionData.Field_18) descriptionParts.push(submissionData.Field_18 as string);
  if (submissionData.Field_7) descriptionParts.push(`Organization: ${submissionData.Field_7}`);
  if (submissionData.Field_8) descriptionParts.push(`Role: ${submissionData.Field_8}`);

  const lead: Record<string, unknown> = {
    First_Name: firstName,
    Last_Name: lastName || firstName || "Unknown", // Last name is required in Zoho
    Email: email,
    Phone: phone,
    Lead_Source: "WeKIT Website - Wot Kareer Interest Form",
  };

  // Add optional fields if they have values
  if (submissionData.Field_1) lead.Salutation = submissionData.Field_1;
  if (street) lead.Street = street;
  if (city) lead.City = city;
  if (state) lead.State = state;
  if (zipCode) lead.Zip_Code = zipCode;
  if (country) lead.Country = country;
  if (submissionData.Field_7) lead.Company = submissionData.Field_7;
  if (descriptionParts.length > 0) lead.Description = descriptionParts.join("\n");

  return lead;
}

// Create lead in Zoho CRM
async function createZohoLead(accessToken: string, leadData: Record<string, unknown>): Promise<{ success: boolean; leadId?: string; error?: string }> {
  const response = await fetch("https://www.zohoapis.in/crm/v2/Leads", {
    method: "POST",
    headers: {
      "Authorization": `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [leadData],
      trigger: ["workflow"], // Trigger any workflows in Zoho CRM
    }),
  });

  const result: ZohoLeadResponse = await response.json();
  console.log("Zoho CRM response:", JSON.stringify(result));

  if (result.data && result.data[0]) {
    const leadResult = result.data[0];
    if (leadResult.status === "success" && leadResult.details?.id) {
      return { success: true, leadId: leadResult.details.id };
    }
    return { success: false, error: leadResult.message || "Unknown error" };
  }

  return { success: false, error: result.message || "Failed to create lead" };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase credentials");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Parse and validate request body
    const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    let submissionIds: string[] = [];
    
    if (req.method === "POST") {
      const body = await req.json();
      if (body.submission_id) {
        if (typeof body.submission_id !== 'string' || !UUID_REGEX.test(body.submission_id)) {
          return new Response(
            JSON.stringify({ error: "Invalid submission_id format. Must be a valid UUID." }),
            { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
        submissionIds = [body.submission_id];
      } else if (body.submission_ids) {
        if (!Array.isArray(body.submission_ids) || body.submission_ids.length > 50) {
          return new Response(
            JSON.stringify({ error: "submission_ids must be an array with at most 50 items." }),
            { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
        const allValid = body.submission_ids.every((id: unknown) => typeof id === 'string' && UUID_REGEX.test(id as string));
        if (!allValid) {
          return new Response(
            JSON.stringify({ error: "All submission_ids must be valid UUIDs." }),
            { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
          );
        }
        submissionIds = body.submission_ids;
      } else if (body.sync_all_pending === true) {
        // Get all pending submissions
        const { data: pendingSubmissions } = await supabase
          .from("zoho_form_submissions")
          .select("id")
          .eq("zoho_sync_status", "pending")
          .limit(50);
        
        submissionIds = pendingSubmissions?.map((s: { id: string }) => s.id) || [];
      }
    }

    if (submissionIds.length === 0) {
      return new Response(
        JSON.stringify({ error: "No submissions to sync" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log(`Syncing ${submissionIds.length} submissions to Zoho CRM`);

    // Get fresh access token
    const accessToken = await getAccessToken();

    // Fetch submissions to sync
    const { data: submissions, error: fetchError } = await supabase
      .from("zoho_form_submissions")
      .select("id, submission_data, zoho_sync_status")
      .in("id", submissionIds);

    if (fetchError) {
      throw new Error(`Failed to fetch submissions: ${fetchError.message}`);
    }

    const results: Array<{ id: string; success: boolean; leadId?: string; error?: string }> = [];

    // Process each submission
    for (const submission of (submissions as FormSubmission[]) || []) {
      try {
        // Map form data to Zoho Lead format
        const leadData = mapToZohoLead(submission.submission_data);
        
        // Create lead in Zoho CRM
        const createResult = await createZohoLead(accessToken, leadData);
        
        // Update submission with sync result
        await supabase
          .from("zoho_form_submissions")
          .update({
            zoho_sync_status: createResult.success ? "synced" : "failed",
            zoho_lead_id: createResult.leadId || null,
            zoho_synced_at: createResult.success ? new Date().toISOString() : null,
            sync_error: createResult.error || null,
          })
          .eq("id", submission.id);

        results.push({
          id: submission.id,
          success: createResult.success,
          leadId: createResult.leadId,
          error: createResult.error,
        });

        console.log(`Submission ${submission.id}: ${createResult.success ? "synced" : "failed"}`);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        
        await supabase
          .from("zoho_form_submissions")
          .update({
            zoho_sync_status: "failed",
            sync_error: errorMessage,
          })
          .eq("id", submission.id);

        results.push({ id: submission.id, success: false, error: errorMessage });
        console.error(`Submission ${submission.id} error:`, errorMessage);
      }
    }

    const successCount = results.filter(r => r.success).length;
    const failCount = results.filter(r => !r.success).length;

    return new Response(
      JSON.stringify({
        success: true,
        message: `Synced ${successCount} leads, ${failCount} failed`,
        results,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in zoho-crm-sync function:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
