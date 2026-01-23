-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions FOR INSERT WITH CHECK (true);

-- Create newsletter_subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscriptions FOR INSERT WITH CHECK (true);

-- Create page_interactions table
CREATE TABLE public.page_interactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_name TEXT NOT NULL,
  interaction_type TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.page_interactions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can log page interactions" ON public.page_interactions FOR INSERT WITH CHECK (true);

-- Create mentor_waitlist table
CREATE TABLE public.mentor_waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  expertise TEXT,
  linkedin_url TEXT,
  motivation TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.mentor_waitlist ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can join mentor waitlist" ON public.mentor_waitlist FOR INSERT WITH CHECK (true);

-- Create psychometric_test_leads table
CREATE TABLE public.psychometric_test_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  referral_source TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.psychometric_test_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit psychometric leads" ON public.psychometric_test_leads FOR INSERT WITH CHECK (true);

-- Add indexes for common queries
CREATE INDEX idx_contact_submissions_created ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_newsletter_email ON public.newsletter_subscriptions(email);
CREATE INDEX idx_page_interactions_page ON public.page_interactions(page_name);
CREATE INDEX idx_mentor_waitlist_email ON public.mentor_waitlist(email);
CREATE INDEX idx_psychometric_leads_created ON public.psychometric_test_leads(created_at DESC);