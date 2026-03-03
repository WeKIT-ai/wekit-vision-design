

# Move All Forms to Zoho CRM

## Complete Form Inventory

Here are all 9 forms on the website with their field names, ready for you to create matching Zoho CRM forms or web forms.

---

### 1. Demo Request Form
**Location:** Schools page (`/schools`)
**Purpose:** Schools/colleges requesting a product demo

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email Address | Email | Yes |
| Phone Number | Phone | Yes |
| Designation | Dropdown: Principal/Director, Vice Principal, Coordinator, Career Counselor, Teacher/Educator, Administrator, Trustee/Management, Other | Yes |
| Name of Organisation | Text | Yes |
| Number of Students | Dropdown: 1-100, 101-500, 501-1000, 1001-2500, 2500+ | Yes |
| Programme Interest | Dropdown: WALS Lab, WABLS, WAPPS, WeKIT 360 Mentoring, WAFLE Lab, WAFFS, WAP3, Complete WeKIT Suite | No |
| Service For | Dropdown: Students, Teachers, Parents, Entire Institution | No |

---

### 2. Contact Form (Get in Touch)
**Location:** Home page and other pages
**Purpose:** General inquiries

| Field | Type | Required |
|-------|------|----------|
| Your Name | Text | Yes |
| Email Address | Email | Yes |
| Organization/Company | Text | No |
| Message | Textarea | Yes |

---

### 3. Newsletter Signup
**Location:** Home page, Schools page
**Purpose:** Email newsletter subscription

| Field | Type | Required |
|-------|------|----------|
| Email | Email | Yes |

---

### 4. Early Access / Waitlist Form
**Location:** Home page
**Purpose:** Join early access list

| Field | Type | Required |
|-------|------|----------|
| Your Name | Text | Yes |
| Email Address | Email | Yes |
| I am a... | Dropdown: Student, Educator, Professional, Administrator | Yes |
| School/Organization | Text | No |

---

### 5. Mentor Signup (Become a Mentor)
**Location:** Home page
**Purpose:** Mentor interest expression

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email Address | Email | Yes |
| Current Company | Text | No |
| Industry | Dropdown: Technology, Finance, Healthcare, Education, Marketing, Consulting, Other | Yes |
| Years of Experience | Dropdown: 3-5, 5-10, 10-15, 15+ | Yes |
| Expertise Description | Textarea | Yes |

---

### 6. Partnership Inquiry
**Location:** Schools page, Home page
**Purpose:** Partnership/collaboration inquiries

| Field | Type | Required |
|-------|------|----------|
| Contact Name | Text | Yes |
| Email Address | Email | Yes |
| Organization Name | Text | Yes |
| Partnership Type | Dropdown: Strategic Partnership, Technology Integration, Content Collaboration, Funding/Investment, Distribution Partnership | Yes |
| Details | Textarea | Yes |

---

### 7. Mentor Waitlist (Full Application)
**Location:** `/mentor-waitlist`
**Purpose:** Detailed mentor application

| Field | Type | Required |
|-------|------|----------|
| First Name | Text | Yes |
| Last Name | Text | Yes |
| Email Address | Email | Yes |
| Phone Number | Phone | No |
| Company/Organization | Text | Yes |
| Position/Title | Text | Yes |
| Industry | Dropdown: Technology, Healthcare, Finance, Education, Marketing, Engineering, Design, Consulting, Non-profit, Government, Real Estate, Media, Retail, Manufacturing, Other | Yes |
| Years of Experience | Number | Yes |
| Areas of Expertise | Textarea (comma-separated) | Yes |
| Preferred Meeting Format | Dropdown: Video calls, Phone calls, In-person, Chat/messaging, Email, Group sessions | No |
| Time Commitment | Dropdown: 1-2 hrs/mo, 3-5 hrs/mo, 6-10 hrs/mo, 11+ hrs/mo, Flexible | No |
| Availability | Textarea | No |
| Mentoring Philosophy | Textarea | Yes |
| Motivation | Textarea | Yes |

---

### 8. Waitlist Signup (Landing Page)
**Location:** `/waitlist` (hero + CTA sections)
**Purpose:** Student waitlist for product launch

| Field | Type | Required |
|-------|------|----------|
| Your Name | Text | Yes |
| Email Address | Email | Yes |

---

### 9. White Paper Download
**Location:** `/white-paper`
**Purpose:** Gated content download

| Field | Type | Required |
|-------|------|----------|
| First Name | Text | Yes |
| Last Name | Text | Yes |
| Email | Email | Yes |
| Organization | Text | Yes |

---

## Implementation Approach

Once you create the corresponding Zoho CRM Web Forms (or Zoho Forms), there are two ways to integrate them:

### Option A: Embed Zoho Web Forms via iframe
- Replace each React form component with an iframe embedding the Zoho-hosted form
- Zoho handles all data capture and CRM syncing automatically
- Simplest approach; no backend code needed
- Tradeoff: styling won't match the site perfectly

### Option B: Keep custom UI, POST to Zoho Web-to-Lead endpoint
- Keep the existing styled React forms
- On submit, POST directly to Zoho's web-to-lead URL (or call the existing `zoho-crm-sync` backend function)
- Data goes to Zoho CRM as Leads automatically
- Best of both worlds: matching design + Zoho CRM capture

### Recommended Next Steps
1. Create 9 Zoho CRM Web Forms matching the fields above
2. Choose Option A (embed) or Option B (custom UI with Zoho POST)
3. Update each form component accordingly
4. Remove or keep the local database persistence as a backup

Let me know which approach you prefer (embed or custom UI) so I can implement accordingly.
