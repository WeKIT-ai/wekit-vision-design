-- Fix Critical Security Issues
-- 1. Fix newsletter_subscriptions public exposure (CVE: PUBLIC_USER_DATA)
-- 2. Add white_paper_leads admin SELECT policy
-- 3. Fix database functions schema poisoning vulnerability

-- 1. Fix newsletter_subscriptions - remove public SELECT access
DROP POLICY IF EXISTS "Admins can view all newsletter subscriptions" ON public.newsletter_subscriptions;

CREATE POLICY "Admins can view all newsletter subscriptions"
ON public.newsletter_subscriptions
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'));

-- 2. Add missing SELECT policy for white_paper_leads
CREATE POLICY "Admins can view white paper leads"
ON public.white_paper_leads
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'));

-- 3. Fix schema poisoning vulnerabilities in database functions
-- Fix get_current_user_role() function
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS app_role
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role
  FROM public.user_roles
  WHERE user_id = auth.uid()
    AND is_active = true
  LIMIT 1
$$;

-- Fix handle_new_user() function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

-- Fix update_updated_at_column() function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;