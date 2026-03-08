-- Drop the overly-permissive SELECT policy
DROP POLICY IF EXISTS "Users can view all mentor profiles" ON public.mentor_profiles;

-- Owner can always see their own profile
CREATE POLICY "Users can view their own profile"
  ON public.mentor_profiles FOR SELECT TO authenticated
  USING (id = auth.uid());

-- Matched users can view profiles of their matches
CREATE POLICY "Matched users can view profiles"
  ON public.mentor_profiles FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.mentor_matches
      WHERE (mentor_id = auth.uid() OR mentee_id = auth.uid())
      AND (mentor_id = mentor_profiles.id OR mentee_id = mentor_profiles.id)
    )
  );

-- Secure RPC for public mentor browsing (excludes email)
CREATE OR REPLACE FUNCTION public.search_mentors()
RETURNS TABLE (
  id uuid,
  full_name text,
  bio text,
  location text,
  industry text[],
  skills text[],
  experience_level integer,
  availability text[],
  avatar_url text,
  role mentor_role
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT id, full_name, bio, location, industry, skills, experience_level, availability, avatar_url, role
  FROM public.mentor_profiles
  WHERE role = 'mentor';
$$;