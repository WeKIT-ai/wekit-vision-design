
-- Restrict contact_tags to admin-only access
DROP POLICY IF EXISTS "Authenticated users can view contact tags" ON public.contact_tags;
CREATE POLICY "Admins can view contact tags"
ON public.contact_tags FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Restrict contact_interactions to admin-only access
DROP POLICY IF EXISTS "Authenticated users can view interactions" ON public.contact_interactions;
CREATE POLICY "Admins can view contact interactions"
ON public.contact_interactions FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Restrict ai_embeddings to admin-only access
DROP POLICY IF EXISTS "Authenticated users can view embeddings" ON public.ai_embeddings;
CREATE POLICY "Admins can view AI embeddings"
ON public.ai_embeddings FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
