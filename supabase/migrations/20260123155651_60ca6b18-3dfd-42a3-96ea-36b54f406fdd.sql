-- =====================================================
-- WeKIT AI-Ready CRM Database Schema
-- Merges with existing lead-gen tables
-- =====================================================

-- 1. ENUM TYPES for standardized values
CREATE TYPE public.contact_role AS ENUM ('mentee', 'mentor', 'parent', 'educator', 'admin');
CREATE TYPE public.relationship_stage AS ENUM ('new_lead', 'contacted', 'engaged', 'qualified', 'converted', 'churned');
CREATE TYPE public.partner_type AS ENUM ('skill_partner', 'ngo_partner', 'govt_partner', 'corporate_partner', 'faith_partner');
CREATE TYPE public.interaction_type AS ENUM ('call', 'email', 'whatsapp', 'meeting', 'event', 'form_submission', 'other');
CREATE TYPE public.outcome_status AS ENUM ('positive', 'neutral', 'negative', 'pending', 'no_response');

-- 2. CATEGORIES/TAGS TAXONOMY (for AI tagging and filtering)
CREATE TABLE public.expertise_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    parent_id UUID REFERENCES public.expertise_categories(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Seed initial categories from Excel
INSERT INTO public.expertise_categories (name) VALUES 
    ('AI'), ('EdTech'), ('Funding'), ('Supply Chain'), ('Marketing'),
    ('Design'), ('Leadership'), ('Mentorship'), ('Startups'), ('Partnerships'),
    ('Skill Partner'), ('Govt Partner'), ('Faith Partner');

-- 3. ORGANIZATIONS TABLE (Schools, Companies, Partners)
CREATE TABLE public.organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    external_id TEXT UNIQUE, -- ORG-001, SKPT-001, etc.
    name TEXT NOT NULL,
    org_type TEXT, -- Educational, Corporate, NGO, Government
    partner_type public.partner_type,
    website TEXT,
    email TEXT,
    phone TEXT,
    linkedin_url TEXT,
    location_city TEXT,
    location_country TEXT,
    timezone TEXT,
    language_preference TEXT DEFAULT 'English',
    program_affiliation TEXT,
    notes TEXT,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_organizations_external_id ON public.organizations(external_id);
CREATE INDEX idx_organizations_partner_type ON public.organizations(partner_type);
CREATE INDEX idx_organizations_location ON public.organizations(location_country, location_city);
CREATE INDEX idx_organizations_metadata ON public.organizations USING GIN(metadata);

-- 4. CONTACTS TABLE (Mentees, Mentors, all people)
CREATE TABLE public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    external_id TEXT UNIQUE, -- MTEE-001, etc.
    auth_user_id UUID, -- Link to auth.users if they have an account
    full_name TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    role public.contact_role NOT NULL DEFAULT 'mentee',
    email TEXT,
    phone TEXT,
    linkedin_url TEXT,
    profile_photo_url TEXT,
    location_city TEXT,
    location_country TEXT,
    timezone TEXT,
    language_preference TEXT DEFAULT 'English',
    preferred_channel TEXT DEFAULT 'Email',
    organization_id UUID REFERENCES public.organizations(id),
    program_affiliation TEXT,
    relationship_stage public.relationship_stage DEFAULT 'new_lead',
    source TEXT,
    engagement_score INTEGER DEFAULT 0,
    consent_given BOOLEAN DEFAULT false,
    status TEXT DEFAULT 'Active',
    notes TEXT,
    metadata JSONB DEFAULT '{}',
    date_added DATE DEFAULT CURRENT_DATE,
    last_contacted TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_contacts_external_id ON public.contacts(external_id);
CREATE INDEX idx_contacts_email ON public.contacts(email);
CREATE INDEX idx_contacts_role ON public.contacts(role);
CREATE INDEX idx_contacts_organization ON public.contacts(organization_id);
CREATE INDEX idx_contacts_relationship_stage ON public.contacts(relationship_stage);
CREATE INDEX idx_contacts_engagement ON public.contacts(engagement_score DESC);
CREATE INDEX idx_contacts_metadata ON public.contacts USING GIN(metadata);
CREATE INDEX idx_contacts_full_text ON public.contacts USING GIN(to_tsvector('english', coalesce(full_name, '') || ' ' || coalesce(notes, '')));

-- 5. CONTACT TAGS (Many-to-Many for expertise/interests)
CREATE TABLE public.contact_tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contact_id UUID NOT NULL REFERENCES public.contacts(id) ON DELETE CASCADE,
    category_id UUID NOT NULL REFERENCES public.expertise_categories(id) ON DELETE CASCADE,
    tag_type TEXT DEFAULT 'expertise', -- 'expertise', 'interest', 'offer'
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(contact_id, category_id, tag_type)
);

CREATE INDEX idx_contact_tags_contact ON public.contact_tags(contact_id);
CREATE INDEX idx_contact_tags_category ON public.contact_tags(category_id);

-- 6. ORGANIZATION TAGS (Many-to-Many)
CREATE TABLE public.organization_tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    category_id UUID NOT NULL REFERENCES public.expertise_categories(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(organization_id, category_id)
);

-- 7. CONTACT INTERACTIONS (CRM activity log)
CREATE TABLE public.contact_interactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    external_id TEXT UNIQUE, -- INT-001, etc.
    contact_id UUID NOT NULL REFERENCES public.contacts(id) ON DELETE CASCADE,
    interaction_type public.interaction_type NOT NULL,
    interaction_date TIMESTAMPTZ NOT NULL DEFAULT now(),
    notes TEXT,
    outcome public.outcome_status DEFAULT 'pending',
    metadata JSONB DEFAULT '{}',
    created_by UUID, -- User who logged this
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_contact_interactions_contact ON public.contact_interactions(contact_id);
CREATE INDEX idx_contact_interactions_date ON public.contact_interactions(interaction_date DESC);
CREATE INDEX idx_contact_interactions_type ON public.contact_interactions(interaction_type);
CREATE INDEX idx_contact_interactions_outcome ON public.contact_interactions(outcome);

-- 8. AI EMBEDDINGS TABLE (for vector search - future use)
CREATE TABLE public.ai_embeddings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type TEXT NOT NULL, -- 'contact', 'organization', 'interaction'
    entity_id UUID NOT NULL,
    embedding_model TEXT DEFAULT 'text-embedding-3-small',
    content_hash TEXT, -- To detect if re-embedding needed
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(entity_type, entity_id)
);

CREATE INDEX idx_ai_embeddings_entity ON public.ai_embeddings(entity_type, entity_id);

-- 9. UPDATED_AT TRIGGER FUNCTION (reuse if exists)
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Apply triggers
CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON public.organizations
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON public.contacts
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_ai_embeddings_updated_at BEFORE UPDATE ON public.ai_embeddings
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 10. ENABLE RLS ON ALL TABLES
ALTER TABLE public.expertise_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organization_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_embeddings ENABLE ROW LEVEL SECURITY;

-- 11. RLS POLICIES (Read-only public, admin-only write - will add auth later)
-- Categories are public readable
CREATE POLICY "Categories are publicly readable" ON public.expertise_categories
FOR SELECT USING (true);

-- Organizations are publicly readable
CREATE POLICY "Organizations are publicly readable" ON public.organizations
FOR SELECT USING (true);

-- Contacts need auth to view (privacy protection)
CREATE POLICY "Authenticated users can view contacts" ON public.contacts
FOR SELECT TO authenticated USING (true);

-- Contact tags readable by authenticated
CREATE POLICY "Authenticated users can view contact tags" ON public.contact_tags
FOR SELECT TO authenticated USING (true);

-- Organization tags publicly readable
CREATE POLICY "Organization tags are publicly readable" ON public.organization_tags
FOR SELECT USING (true);

-- Interactions readable by authenticated
CREATE POLICY "Authenticated users can view interactions" ON public.contact_interactions
FOR SELECT TO authenticated USING (true);

-- AI embeddings readable by authenticated
CREATE POLICY "Authenticated users can view embeddings" ON public.ai_embeddings
FOR SELECT TO authenticated USING (true);

-- 12. FIX: Add RLS policy for zoho_form_submissions (was missing)
CREATE POLICY "Allow webhook inserts to zoho_form_submissions" ON public.zoho_form_submissions
FOR INSERT WITH CHECK (true);