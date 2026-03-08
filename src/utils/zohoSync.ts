import { supabase } from '@/integrations/supabase/client';

interface ZohoSyncData {
  form_type: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  company?: string;
  description?: string;
  lead_source?: string;
  [key: string]: unknown;
}

/**
 * Saves form submission to zoho_form_submissions table and triggers
 * the zoho-crm-sync edge function to push the lead to Zoho CRM.
 * This is a fire-and-forget operation — errors are logged but don't
 * block the user experience.
 */
export async function syncToZohoCRM(data: ZohoSyncData): Promise<void> {
  try {
    // 1. Save to zoho_form_submissions
    const { data: submission, error: insertError } = await supabase
      .from('zoho_form_submissions')
      .insert([{
        form_id: data.form_type,
        submission_data: data as Record<string, unknown>,
        submitted_at: new Date().toISOString(),
      }])
      .select('id')
      .single();

    if (insertError || !submission) {
      console.error('Failed to save Zoho form submission:', insertError);
      return;
    }

    // 2. Trigger zoho-crm-sync edge function
    const { error: syncError } = await supabase.functions.invoke('zoho-crm-sync', {
      body: { submission_id: submission.id },
    });

    if (syncError) {
      console.error('Zoho CRM sync trigger failed:', syncError);
    }
  } catch (err) {
    console.error('Zoho sync error:', err);
  }
}
