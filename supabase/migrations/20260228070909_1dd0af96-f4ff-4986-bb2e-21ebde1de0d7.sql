
-- Create mentor_role enum
CREATE TYPE public.mentor_role AS ENUM ('mentor', 'mentee');

-- Create match_status enum
CREATE TYPE public.match_status AS ENUM ('pending', 'accepted', 'rejected');

-- Create mentor_profiles table
CREATE TABLE public.mentor_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role mentor_role NOT NULL,
  full_name text NOT NULL,
  email text,
  bio text,
  location text,
  industry text[] DEFAULT '{}',
  skills text[] DEFAULT '{}',
  goals text[] DEFAULT '{}',
  availability text[] DEFAULT '{}',
  experience_level integer DEFAULT 0,
  avatar_url text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create mentor_matches table
CREATE TABLE public.mentor_matches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  mentor_id uuid NOT NULL REFERENCES public.mentor_profiles(id) ON DELETE CASCADE,
  mentee_id uuid NOT NULL REFERENCES public.mentor_profiles(id) ON DELETE CASCADE,
  compatibility_score integer NOT NULL DEFAULT 0,
  status match_status NOT NULL DEFAULT 'pending',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(mentor_id, mentee_id)
);

-- Enable RLS
ALTER TABLE public.mentor_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentor_matches ENABLE ROW LEVEL SECURITY;

-- RLS for mentor_profiles
CREATE POLICY "Users can view all mentor profiles"
  ON public.mentor_profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert their own profile"
  ON public.mentor_profiles FOR INSERT
  TO authenticated
  WITH CHECK (id = auth.uid());

CREATE POLICY "Users can update their own profile"
  ON public.mentor_profiles FOR UPDATE
  TO authenticated
  USING (id = auth.uid());

-- RLS for mentor_matches
CREATE POLICY "Users can view their own matches"
  ON public.mentor_matches FOR SELECT
  TO authenticated
  USING (mentor_id = auth.uid() OR mentee_id = auth.uid());

CREATE POLICY "Users can update matches involving them"
  ON public.mentor_matches FOR UPDATE
  TO authenticated
  USING (mentor_id = auth.uid() OR mentee_id = auth.uid());

-- Service role needs insert for edge function
CREATE POLICY "Service role can insert matches"
  ON public.mentor_matches FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Updated_at triggers
CREATE TRIGGER update_mentor_profiles_updated_at
  BEFORE UPDATE ON public.mentor_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_mentor_matches_updated_at
  BEFORE UPDATE ON public.mentor_matches
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
