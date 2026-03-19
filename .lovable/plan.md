

## Plan: Create WeKIT Smiles Dedicated Page

### What
Rebrand the existing "WeKIT Dental Assistant School" as **WeKIT Smiles** and give it a dedicated page at `/smiles`. Update references across the site.

### Changes

1. **Create `/src/pages/WeKITSmiles.tsx`**
   - Full dedicated page with the same premium design language as the rest of the site
   - Hero section with "WeKIT Smiles" branding (teal/emerald + gold palette)
   - Program overview (dental assistant training, eligibility, certification)
   - Curriculum breakdown (Clinical Assisting, Patient Care, Office Management, Dental Software, Soft Skills)
   - Programme Snapshot card (Eligibility: 10th Pass 18+, Location, Fee from ₹25,000, Scholarships)
   - Why WeKIT Smiles section (mentorship-driven, purpose-led, industry partnerships)
   - CTA with application/waitlist button
   - Policy acceptance integration (existing `PolicyAcceptance` component)

2. **Update `src/App.tsx`**
   - Add route: `/smiles` → `<WeKITSmiles />`

3. **Update `src/pages/Courses.tsx`**
   - Replace the inline Dental Assistant section with a teaser card linking to `/smiles`

4. **Update `src/components/navigation/megamenu/MegaMenuData.ts`**
   - Add "WeKIT Smiles" link under relevant menu groups (e.g., Courses or Programs)

5. **Update any other references**
   - Check Programs page (`YouthPathways`, etc.) for dental references to update

