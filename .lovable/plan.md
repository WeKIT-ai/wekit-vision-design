## Goal
Add a new **Internships & Opportunities** section accessible from the Resources area, populated with realistic dummy listings.

## Changes

### 1. New page: `src/pages/Opportunities.tsx`
A full page styled to match `Resources.tsx` (same hero pattern, primary background, accent labels, cards from `@/components/ui/card`). Sections:

- **Hero** — Title "Internships & Opportunities", subtitle, two CTAs (Submit Application / Post an Opportunity).
- **Filter bar** (visual only) — chips: All, Internship, Fellowship, Graduate Program, Volunteer, Remote, On-site.
- **Listings grid** — ~9 dummy opportunities as cards. Each card shows: type tag, title, organization, location, duration, stipend, deadline, short description, "Apply Now" button (dummy link).
- **CTA footer** — "Are you an employer? Partner with WeKIT" block.

Dummy data examples (mix of internships, fellowships, volunteer roles):
- Software Engineering Intern — Microsoft (Nairobi, 3 months, $1,500/mo)
- Marketing Fellowship — Safaricom Foundation (Remote, 6 months)
- Data Science Internship — IBM Africa (Lagos, 4 months)
- Youth Leadership Fellow — UNICEF (Kampala, 12 months)
- Product Design Intern — Andela (Remote, 3 months)
- CSR Program Volunteer — WeKIT NGO Network (Multiple locations)
- Renewable Energy Intern — M-KOPA (Nairobi, 6 months)
- Finance Graduate Program — Equity Bank (Kenya, 2 years)
- Content Creator Fellowship — WeKIT Media (Remote, 4 months)

### 2. Routing: `src/App.tsx`
Import `Opportunities` and add route:
```
<Route path="/opportunities" element={<Opportunities />} />
```

### 3. Resources dropdown: `src/components/navigation/ResourcesDropdown.tsx`
Add new dropdown item linking to `/opportunities` labeled "Internships & Opportunities" (alongside existing White Paper link).

### 4. Resources page: `src/pages/Resources.tsx`
Add a new highlighted section/card linking to `/opportunities` so users browsing Resources can discover it. Place it as a featured callout block (e.g., before the White Paper Feature section) using existing primary/accent design tokens.

## Notes
- All data is hard-coded dummy content — no backend tables needed.
- Reuses existing design tokens (primary, accent, secondary, muted) — no new colors.
- Mega menu (`MegaMenuData.ts`) is a separate nav system; if it surfaces Resources, I'll also add the entry there. Will check on implementation.
