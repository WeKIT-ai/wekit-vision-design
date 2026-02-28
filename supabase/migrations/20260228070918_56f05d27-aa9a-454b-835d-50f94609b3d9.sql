
-- Tighten the mentor_matches insert policy
DROP POLICY "Service role can insert matches" ON public.mentor_matches;

CREATE POLICY "Users can insert matches as mentee"
  ON public.mentor_matches FOR INSERT
  TO authenticated
  WITH CHECK (mentee_id = auth.uid());
