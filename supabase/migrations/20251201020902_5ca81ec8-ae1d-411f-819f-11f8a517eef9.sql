-- Drop the insecure public policy on calendly_webhooks
DROP POLICY IF EXISTS "System can manage calendly webhooks" ON calendly_webhooks;

-- Create a service role only policy for calendly webhooks
-- This ensures only backend edge functions with service_role key can access webhook data
CREATE POLICY "Service role only for calendly webhooks" 
ON calendly_webhooks
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- Add a policy to allow authenticated users to view their own webhook records
-- This is useful for mentors to see their scheduling history
CREATE POLICY "Mentors can view their own webhooks" 
ON calendly_webhooks
FOR SELECT 
TO authenticated
USING (
  mentor_id IN (
    SELECT id FROM mentor_profiles WHERE user_id = auth.uid()
  )
);