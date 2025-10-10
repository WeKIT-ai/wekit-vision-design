-- Phase 1: Fix Critical Database Security Issues

-- 1.1: Create security definer helper functions to prevent infinite recursion
CREATE OR REPLACE FUNCTION public.user_is_mentor_in_connection(_connection_id uuid, _user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM mentorship_connections mc
    JOIN mentor_profiles mp ON mc.mentor_id = mp.id
    WHERE mc.id = _connection_id AND mp.user_id = _user_id
  )
$$;

CREATE OR REPLACE FUNCTION public.user_is_mentee_in_connection(_connection_id uuid, _user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM mentorship_connections mc
    JOIN youth_profiles yp ON mc.mentee_id = yp.id
    WHERE mc.id = _connection_id AND yp.user_id = _user_id
  )
$$;

CREATE OR REPLACE FUNCTION public.user_is_connection_participant(_connection_id uuid, _user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM mentorship_connections mc
    LEFT JOIN mentor_profiles mp ON mc.mentor_id = mp.id
    LEFT JOIN youth_profiles yp ON mc.mentee_id = yp.id
    WHERE mc.id = _connection_id 
      AND (_user_id = mp.user_id OR _user_id = yp.user_id)
  )
$$;

-- 1.2: Fix all existing database functions to include search_path
CREATE OR REPLACE FUNCTION public.award_coins(p_user_id uuid, p_amount integer, p_activity_type text, p_description text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  UPDATE public.user_profiles 
  SET coins_balance = coins_balance + p_amount,
      total_contributions = total_contributions + 1
  WHERE user_id = p_user_id;
  
  INSERT INTO public.user_activities (user_id, activity_type, points_earned, description)
  VALUES (p_user_id, p_activity_type, p_amount, p_description);
END;
$function$;

CREATE OR REPLACE FUNCTION public.assign_mentor_role()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  IF NEW.user_id IS NOT NULL THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.user_id, 'mentor')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.assign_youth_role()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  IF NEW.user_id IS NOT NULL THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.user_id, 'youth')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.sanitize_text(input text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE
SET search_path = public
AS $function$
BEGIN
  RETURN LEFT(TRIM(REGEXP_REPLACE(input, '[<>&"'']', '', 'g')), 500);
END;
$function$;

CREATE OR REPLACE FUNCTION public.validate_email(email text)
RETURNS boolean
LANGUAGE plpgsql
IMMUTABLE
SET search_path = public
AS $function$
BEGIN
  RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$';
END;
$function$;

CREATE OR REPLACE FUNCTION public.validate_phone(phone text)
RETURNS boolean
LANGUAGE plpgsql
IMMUTABLE
SET search_path = public
AS $function$
BEGIN
  RETURN phone ~* '^[\+]?[1-9]?[\d\s\-\(\)]{10,15}$';
END;
$function$;

CREATE OR REPLACE FUNCTION public.create_scheduling_request(p_mentee_id uuid, p_mentor_id uuid, p_subject text, p_description text, p_preferred_time text DEFAULT NULL::text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
DECLARE
  request_id UUID;
BEGIN
  INSERT INTO public.mentoring_requests (
    mentee_id,
    mentor_id,
    subject,
    description,
    preferred_time,
    is_scheduling_request,
    status
  ) VALUES (
    p_mentee_id,
    p_mentor_id,
    p_subject,
    p_description,
    p_preferred_time,
    true,
    'pending'
  ) RETURNING id INTO request_id;
  
  RETURN request_id;
END;
$function$;

-- 1.3: Drop problematic recursive policies on mentorship_connections
DROP POLICY IF EXISTS "Mentors can view their connections" ON public.mentorship_connections;
DROP POLICY IF EXISTS "Youth can view their connections" ON public.mentorship_connections;
DROP POLICY IF EXISTS "Users can view their own mentorship connections" ON public.mentorship_connections;
DROP POLICY IF EXISTS "Participants can update their connections" ON public.mentorship_connections;
DROP POLICY IF EXISTS "Mentors can update their mentorship connections" ON public.mentorship_connections;
DROP POLICY IF EXISTS "Youth can update their mentorship connections" ON public.mentorship_connections;
DROP POLICY IF EXISTS "System can create connections" ON public.mentorship_connections;
DROP POLICY IF EXISTS "System can insert mentorship connections" ON public.mentorship_connections;

-- Create new non-recursive policies using helper functions
CREATE POLICY "Connection participants can view" 
ON public.mentorship_connections
FOR SELECT
TO authenticated
USING (
  has_role(auth.uid(), 'admin'::app_role) OR
  user_is_connection_participant(id, auth.uid())
);

CREATE POLICY "Connection participants can update" 
ON public.mentorship_connections
FOR UPDATE
TO authenticated
USING (
  has_role(auth.uid(), 'admin'::app_role) OR
  user_is_connection_participant(id, auth.uid())
);

CREATE POLICY "Only admins can create connections" 
ON public.mentorship_connections
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- 1.4: Add validation triggers for critical tables
CREATE OR REPLACE FUNCTION validate_contact_submission()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF LENGTH(NEW.name) > 100 OR LENGTH(NEW.name) < 2 THEN
    RAISE EXCEPTION 'Invalid name length';
  END IF;
  IF NOT validate_email(NEW.email) THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  IF NEW.message IS NOT NULL AND (LENGTH(NEW.message) > 2000 OR LENGTH(NEW.message) < 10) THEN
    RAISE EXCEPTION 'Invalid message length';
  END IF;
  NEW.name := sanitize_text(NEW.name);
  NEW.message := sanitize_text(NEW.message);
  RETURN NEW;
END;
$$;

CREATE TRIGGER check_contact_submission
  BEFORE INSERT ON contact_submissions
  FOR EACH ROW EXECUTE FUNCTION validate_contact_submission();

CREATE OR REPLACE FUNCTION validate_newsletter_subscription()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NOT validate_email(NEW.email) THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  IF LENGTH(NEW.email) > 255 THEN
    RAISE EXCEPTION 'Email too long';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER check_newsletter_subscription
  BEFORE INSERT ON newsletter_subscriptions
  FOR EACH ROW EXECUTE FUNCTION validate_newsletter_subscription();

-- 1.5: Fix contact_submissions admin policy
DROP POLICY IF EXISTS "Admins can view all contact submissions" ON public.contact_submissions;

CREATE POLICY "Admins can view all contact submissions" 
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));