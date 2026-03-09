CREATE TABLE public.policy_consent_records (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_identifier TEXT NOT NULL,
  form_source TEXT NOT NULL,
  terms_version TEXT NOT NULL DEFAULT '9 March 2026',
  privacy_version TEXT NOT NULL DEFAULT '9 March 2026',
  safeguarding_version TEXT NOT NULL DEFAULT '9 March 2026',
  accepted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  metadata JSONB DEFAULT '{}'::jsonb
);

ALTER TABLE public.policy_consent_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert consent records"
ON public.policy_consent_records
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admins can view consent records"
ON public.policy_consent_records
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));