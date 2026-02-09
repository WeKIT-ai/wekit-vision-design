-- =====================================================
-- FIX 1: Create user_roles table for admin access control
-- =====================================================

-- Create app_role enum if it doesn't exist
DO $$ BEGIN
    CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Create user_roles table
CREATE TABLE IF NOT EXISTS public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    is_active boolean NOT NULL DEFAULT true,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
      AND is_active = true
  )
$$;

-- Users can only view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (user_id = auth.uid());

-- =====================================================
-- FIX 2: Secure contacts table - admin only access
-- =====================================================

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Authenticated users can view contacts" ON public.contacts;

-- Add admin-only access policy
CREATE POLICY "Admins can view all contacts"
ON public.contacts FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Users can view their own contact record if linked
CREATE POLICY "Users can view their own contact record"
ON public.contacts FOR SELECT TO authenticated
USING (auth_user_id = auth.uid());

-- =====================================================
-- FIX 3: Secure page_interactions - admin only SELECT
-- =====================================================

-- Add admin-only read access for analytics data
CREATE POLICY "Admins can view page interactions"
ON public.page_interactions FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));