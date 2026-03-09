import { supabase } from '@/integrations/supabase/client';

const CURRENT_POLICY_VERSION = '9 March 2026';

export const recordPolicyConsent = async (
  userIdentifier: string,
  formSource: string,
  metadata?: Record<string, unknown>
) => {
  try {
    await (supabase as any).from('policy_consent_records').insert({
      user_identifier: userIdentifier,
      form_source: formSource,
      terms_version: CURRENT_POLICY_VERSION,
      privacy_version: CURRENT_POLICY_VERSION,
      safeguarding_version: CURRENT_POLICY_VERSION,
      metadata: metadata || {},
    });
  } catch {
    // Fire-and-forget — don't block form submission
  }
};
