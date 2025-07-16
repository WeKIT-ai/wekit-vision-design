-- Create mentor waitlist table
CREATE TABLE public.mentor_waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  position TEXT,
  industry TEXT,
  experience_years INTEGER,
  specialties TEXT[],
  availability TEXT,
  mentoring_philosophy TEXT,
  preferred_meeting_format TEXT,
  time_commitment TEXT,
  motivation TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.mentor_waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy allowing anyone to submit mentor applications
CREATE POLICY "Anyone can submit mentor application"
ON public.mentor_waitlist
FOR INSERT
WITH CHECK (true);

-- Create policy for admins to view all mentor applications
CREATE POLICY "Admins can view all mentor applications"
ON public.mentor_waitlist
FOR SELECT
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_mentor_waitlist_updated_at
BEFORE UPDATE ON public.mentor_waitlist
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();