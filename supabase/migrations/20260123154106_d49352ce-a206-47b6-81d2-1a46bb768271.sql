-- Create table for storing Zoho form submissions
CREATE TABLE public.zoho_form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  form_id TEXT NOT NULL DEFAULT 'wot-kareer-interest',
  submission_data JSONB NOT NULL,
  submitted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.zoho_form_submissions ENABLE ROW LEVEL SECURITY;

-- No public access - webhook uses service role to bypass RLS
-- Add index for faster queries
CREATE INDEX idx_zoho_submissions_created_at ON public.zoho_form_submissions(created_at DESC);
CREATE INDEX idx_zoho_submissions_form_id ON public.zoho_form_submissions(form_id);