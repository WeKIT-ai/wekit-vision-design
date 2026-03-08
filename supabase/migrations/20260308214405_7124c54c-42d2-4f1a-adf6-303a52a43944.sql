-- Drop the existing overly-permissive UPDATE policy
DROP POLICY IF EXISTS "Users can update matches involving them" ON public.mentor_matches;

-- Only the MENTOR can accept or reject a match
CREATE POLICY "Mentors can accept or reject matches"
  ON public.mentor_matches FOR UPDATE
  TO authenticated
  USING (mentor_id = auth.uid())
  WITH CHECK (mentor_id = auth.uid());