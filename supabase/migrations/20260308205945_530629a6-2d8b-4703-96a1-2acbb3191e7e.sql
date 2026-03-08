CREATE POLICY "Admins can view zoho submissions"
ON public.zoho_form_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update zoho submissions"
ON public.zoho_form_submissions
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));