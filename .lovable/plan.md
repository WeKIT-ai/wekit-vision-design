
# Waitlist Page Polish -- Aligning with Implementation Guide

## Overview
The existing waitlist page already has all 12 sections in place with the correct content. This plan addresses the styling and content gaps between the current implementation and the uploaded Framer guide.

## Changes

### 1. Footer Overhaul (WaitlistFooter.tsx)
The footer has the most differences from the guide:
- **Add all 6 social media links** with proper URLs: LinkedIn, Instagram, Facebook, X (Twitter), YouTube, Reddit -- using lucide-react icons with orange hover effects
- **Restructure to 4 columns**: Brand (with social icons), Product (links to page sections), Resources (Blog, Career Guides, FAQ, etc.), and "Get Launch Updates" (compact email subscribe form)
- **Add Founder Row** between main footer and bottom bar: circular founder photo, "Connect with Founder Yvonne Roberts" text, LinkedIn button
- **Add bottom bar**: Copyright left, "Privacy Policy | Terms of Service" center, "Made with heart in India" right
- Use proper hover effects (orange background on social icons)

### 2. Problem Stats Gradient Text (WaitlistProblem.tsx)
- Apply Success-Gradient (blue to green) on stat numbers using `bg-clip-text text-transparent`
- Add hover transform `translateY(-4px)` on stat cards

### 3. Features Section Enhancements (WaitlistFeatures.tsx)
- Add checkmark lists to Feature Cards 2-4 per guide:
  - Career Database: "Traditional + emerging careers", "Salary insights (INR)", "Growth projections 2026"
  - Smart Recommendations: "Personalized rankings", "Match strength scores", "Alternative paths"
  - Scholarship Connect: "Government schemes", "Private scholarships", "Financial aid options"

### 4. CTA Button Text Update (WaitlistCTA.tsx)
- Change submit button text from "Join Now" to "Get Early Access"
- Add glassmorphism form container (white/10 bg, white/20 border, backdrop-blur)

### 5. Founder Quote Border Color Fix (WaitlistFounder.tsx)
- Change quote border-left from `border-wekit-blue` to `border-wekit-orange` per guide spec

### 6. How It Works Cards (WaitlistHowItWorks.tsx)
- Wrap each step in a white card with shadow and padding per guide (currently just text on background)
- Increase number badge size to match guide (64px circle)

## Technical Details

### Files to modify:
1. `src/components/waitlist/WaitlistFooter.tsx` -- Major rewrite with 4-column layout, social icons, founder row, bottom bar
2. `src/components/waitlist/WaitlistProblem.tsx` -- Add gradient text to numbers, hover effects on cards
3. `src/components/waitlist/WaitlistFeatures.tsx` -- Add checkmark lists to all 4 feature cards
4. `src/components/waitlist/WaitlistCTA.tsx` -- Update button text, add form container styling
5. `src/components/waitlist/WaitlistFounder.tsx` -- Change quote border color to orange
6. `src/components/waitlist/WaitlistHowItWorks.tsx` -- Add card wrappers to steps

### Database usage:
- The footer email subscribe form will use the existing `newsletter_subscriptions` table for inserts
- No new tables needed

### Dependencies:
- Uses existing lucide-react icons (Linkedin, Instagram, Facebook, Twitter, Youtube, ExternalLink)
- No new packages required
