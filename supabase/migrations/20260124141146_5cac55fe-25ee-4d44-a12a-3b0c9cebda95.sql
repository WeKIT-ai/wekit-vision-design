-- Add sync tracking columns to zoho_form_submissions table
ALTER TABLE public.zoho_form_submissions 
ADD COLUMN IF NOT EXISTS zoho_sync_status TEXT DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS zoho_lead_id TEXT,
ADD COLUMN IF NOT EXISTS zoho_synced_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS sync_error TEXT;