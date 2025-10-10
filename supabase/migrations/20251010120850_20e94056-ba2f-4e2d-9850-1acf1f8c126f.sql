-- Fix mentor_waitlist table RLS policies to prevent public data exposure
-- The current policy allows anyone to read mentor applications containing PII
-- This fixes CVE: PUBLIC_USER_DATA - mentor_waitlist_public_exposure

-- Drop the existing overly permissive SELECT policy
DROP POLICY IF EXISTS "Admins can view all mentor applications" ON public.mentor_waitlist;

-- Create a proper admin-only SELECT policy
CREATE POLICY "Admins can view all mentor applications"
ON public.mentor_waitlist
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'));

-- The INSERT policy remains unchanged to allow public submissions
-- Policy: "Anyone can submit mentor application" FOR INSERT WITH CHECK (true)