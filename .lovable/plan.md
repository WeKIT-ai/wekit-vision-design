

# Integrating Mentor Matching into the Main WeKIT Platform

## Overview
The mentor-matching app ([wekit-mentor-matching](https://wekit-mentor-matching.lovable.app)) is currently a separate project with its own backend and authentication. This plan merges its pages, database tables, and edge function into the main WeKIT platform so users have a single login and a unified experience.

## Current State

**Mentor Matching App (separate project):**
- Pages: Landing, Auth, Onboarding (role selection + profile form), Dashboard (view matches), FindMentor (browse/filter mentors)
- Database tables: `profiles` (mentor/mentee profiles with skills, industry, goals, availability) and `matches` (mentor_id, mentee_id, compatibility_score, status)
- Edge function: `find-matches` (compatibility algorithm scoring industry, skills, goals, availability, location)
- Its own separate authentication (not shared with main app)

**Main WeKIT App (this project):**
- Already has `AuthContext` with sign-up, sign-in, sign-out, and social login (Google, LinkedIn)
- Already has `contacts` table with similar fields (full_name, email, location, etc.)
- Already has RBAC via `user_roles` table

## Integration Strategy

### 1. Database -- Create `profiles` and `matches` tables in THIS project

Create a migration that adds:

**`mentor_profiles` table** (avoids name clash with potential future `profiles` table):
- `id` (uuid, PK, references auth.users on delete cascade)
- `role` (enum: `mentor` | `mentee`)
- `full_name`, `email`, `bio`, `location` (text)
- `industry` (text array), `skills` (text array), `goals` (text array), `availability` (text array)
- `experience_level` (integer)
- `avatar_url` (text, nullable)
- `created_at`, `updated_at` (timestamps)

**`mentor_matches` table:**
- `id` (uuid, PK)
- `mentor_id`, `mentee_id` (uuid, references mentor_profiles)
- `compatibility_score` (integer)
- `status` (enum: `pending` | `accepted` | `rejected`)
- `created_at`, `updated_at` (timestamps)

**RLS policies:**
- Users can read/update their own `mentor_profiles` row
- Users can read matches where they are mentor or mentee
- Users can update match status on matches involving them
- Insert on `mentor_profiles` allowed for authenticated users (own ID only)
- Trigger to auto-create a profile row on user signup (linked to auth.users)

**Relationship to existing `contacts` table:** The `contacts` table is for CRM/admin use. `mentor_profiles` is user-facing. No foreign key between them -- they serve different purposes. An admin-side trigger or function could optionally sync data later.

### 2. Edge Function -- Port `find-matches`

Copy the `find-matches` edge function into `supabase/functions/find-matches/index.ts` in this project. Update table references from `profiles` to `mentor_profiles` and `matches` to `mentor_matches`.

### 3. Pages -- Port and adapt 3 pages

**New pages to create:**

| Page | Route | Source | Changes |
|------|-------|--------|---------|
| MentorOnboarding | `/mentor-onboarding` | Onboarding.tsx | Use `AuthContext` instead of raw supabase.auth; table name to `mentor_profiles`; redirect to `/mentor-dashboard` |
| MentorDashboard | `/mentor-dashboard` | Dashboard.tsx | Use `AuthContext`; remove custom header (uses main Navigation); table names updated |
| FindMentor | `/find-mentor` | FindMentor.tsx | Use `AuthContext`; remove separate Navigation; table names updated |

All three pages will be wrapped in `ProtectedRoute` so only logged-in users can access them. The existing `/auth` page handles login/signup with email, Google, and LinkedIn -- no separate auth flow needed.

### 4. Navigation -- Add "Mentor Matching" link

- Add a "Mentor Matching" nav item in `NavigationItems.tsx` pointing to `/mentor-dashboard`
- Add the same in `MobileMenu.tsx`
- When unauthenticated users click it, `ProtectedRoute` redirects them to `/auth`, and after login they return to the mentor page

### 5. Routing -- Update App.tsx

Add three new protected routes inside the main layout:

```text
/mentor-onboarding  ->  ProtectedRoute > MentorOnboarding
/mentor-dashboard   ->  ProtectedRoute > MentorDashboard
/find-mentor        ->  ProtectedRoute > FindMentor
```

### 6. Auto-redirect logic

On `/mentor-dashboard`, if the user has no `mentor_profiles` row yet, redirect them to `/mentor-onboarding`. After onboarding completes and the `find-matches` function runs, redirect to `/mentor-dashboard`.

## Database Mapping Summary

```text
Mentor-Matching App          Main App (this project)
--------------------         -----------------------
profiles                 ->  mentor_profiles (new table)
matches                  ->  mentor_matches (new table)
supabase.auth            ->  Same auth (AuthContext wraps it)
find-matches (function)  ->  find-matches (ported edge function)
```

No data redundancy -- the existing `contacts` table is CRM-facing, `mentor_profiles` is user-facing. They coexist without duplication.

## Files to Create/Modify

| Action | File |
|--------|------|
| Create | `supabase/migrations/[timestamp]_mentor_matching.sql` (via migration tool) |
| Create | `supabase/functions/find-matches/index.ts` |
| Create | `src/pages/MentorOnboarding.tsx` |
| Create | `src/pages/MentorDashboard.tsx` |
| Create | `src/pages/FindMentor.tsx` |
| Edit | `src/App.tsx` (add 3 routes) |
| Edit | `src/components/navigation/NavigationItems.tsx` (add link) |
| Edit | `src/components/navigation/MobileMenu.tsx` (add link) |

## What Stays the Same

- Single login via `/auth` (email + Google + LinkedIn) -- no new auth pages
- Existing `contacts`, `page_interactions`, and all other tables remain untouched
- Existing navigation structure preserved; mentor matching added as a new item
- All existing pages and forms continue working with no changes

