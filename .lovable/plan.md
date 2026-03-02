

# Security Fixes for Error-Level Findings

## Overview
Four error-level security findings need to be addressed. This plan covers all of them plus a bug found during form review.

## Finding 1: Edge function `find-matches` lacks authentication

**Problem:** The `find-matches` edge function uses `SUPABASE_SERVICE_ROLE_KEY` and accepts any `userId` without verifying the caller is authenticated or that `userId` matches the caller.

**Fix:**
- Add JWT authentication check using `getClaims()` per Lovable Cloud pattern
- Create a user-scoped Supabase client using the caller's auth header
- Validate that the `userId` in the request body matches the authenticated user's `sub` claim
- Keep service role client only for inserting matches (needed to bypass RLS for cross-user inserts)

**File:** `supabase/functions/find-matches/index.ts`

## Finding 2: Edge function `zoho-webhook` incomplete validation

**Problem:** The zoho-webhook accepts arbitrary JSON without schema validation. If `ZOHO_WEBHOOK_SECRET` is not set, it accepts all requests.

**Fix:**
- Make `ZOHO_WEBHOOK_SECRET` mandatory -- return 500 if not configured instead of silently skipping validation
- Add basic schema validation for the webhook payload (enforce it's a non-empty object, cap payload size)

**File:** `supabase/functions/zoho-webhook/index.ts`

## Finding 3: Contact-related tables lack granular RLS

**Problem:** `contact_tags`, `contact_interactions`, and `ai_embeddings` allow all authenticated users to SELECT all rows. These contain sensitive CRM data that should be admin-only (consistent with the `contacts` table fix).

**Fix:** Database migration to:
- Drop the overly permissive `"Authenticated users can view contact tags"` policy, replace with admin-only
- Drop `"Authenticated users can view interactions"`, replace with admin-only
- Drop `"Authenticated users can view embeddings"`, replace with admin-only

**File:** New migration SQL

## Finding 4: `contacts` table exposure (already fixed)

**Status:** Already remediated in migration `20260209030358`. The security finding description confirms "FIXED". This finding will be deleted from the scan results.

## Bug Fix: Newsletter form inserting non-existent column

**Problem:** `NewsletterSignup.tsx` inserts `source_page` into `newsletter_subscriptions`, but that column doesn't exist on the table (only `id`, `email`, `created_at`).

**Fix:** Remove `source_page` from the insert call.

**File:** `src/components/lead-gen/NewsletterSignup.tsx`

## Bug Fix: DemoRequestForm lacks Zod validation and database persistence

**Problem:** `DemoRequestForm.tsx` has no Zod schema validation (uses manual checks only), submits to an empty `ZOHO_WEBHOOK_URL` string (so nothing actually happens), and doesn't store data in the database.

**Fix:**
- Add a `demoRequestSchema` Zod validation (already exists in `validation.ts` but isn't used by this form -- however the existing schema fields don't match the form fields, so we'll use `contactFormSchema`-style validation)
- Store PII in `contact_submissions` and log non-PII analytics to `page_interactions`
- Remove the empty `ZOHO_WEBHOOK_URL` dead code

**File:** `src/components/lead-gen/DemoRequestForm.tsx`

---

## Files to Create/Modify

| Action | File | Purpose |
|--------|------|---------|
| Edit | `supabase/functions/find-matches/index.ts` | Add auth enforcement |
| Edit | `supabase/functions/zoho-webhook/index.ts` | Require webhook secret, add payload validation |
| Create | New migration SQL | Restrict RLS on contact_tags, contact_interactions, ai_embeddings |
| Edit | `src/components/lead-gen/NewsletterSignup.tsx` | Remove non-existent source_page column |
| Edit | `src/components/lead-gen/DemoRequestForm.tsx` | Add validation and database persistence |
| Delete | Security findings | Remove resolved findings from scan results |

## Technical Details

### find-matches auth pattern:
```text
1. Extract Authorization header
2. Create user-scoped client, call getClaims(token)
3. Compare claims.sub with request body userId
4. Reject if mismatch (403) or missing auth (401)
5. Keep service role client for match inserts only
```

### RLS migration:
```text
DROP POLICY "Authenticated users can view contact tags" ON contact_tags;
CREATE POLICY "Admins can view contact tags" ... USING (has_role(auth.uid(), 'admin'));

DROP POLICY "Authenticated users can view interactions" ON contact_interactions;
CREATE POLICY "Admins can view contact interactions" ... USING (has_role(auth.uid(), 'admin'));

DROP POLICY "Authenticated users can view embeddings" ON ai_embeddings;
CREATE POLICY "Admins can view AI embeddings" ... USING (has_role(auth.uid(), 'admin'));
```

### DemoRequestForm fix:
- Add Zod schema for the form fields (fullName, email, phone, designation, organization, studentCount, programme, serviceFor)
- Insert PII into contact_submissions
- Log non-PII analytics (designation, studentCount, programme, serviceFor) into page_interactions
- Remove dead ZOHO_WEBHOOK_URL code
