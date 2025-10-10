-- Drop the overly permissive policy that allows all authenticated users to view youth profiles
-- This policy exposes sensitive student data (names, emails, phones, DOB, school info) to anyone
DROP POLICY IF EXISTS "Allow authenticated users to view youth profiles" ON public.youth_profiles;

-- The remaining policies provide appropriate access control:
-- 1. "Users can view their own youth profile" - users can see their own data
-- 2. "Mentors can view youth profiles of their mentees" - mentors can see their connected mentees
-- 3. "Admins can view all youth profiles" - admins have full access
-- These policies ensure COPPA compliance and protect minors' personal information