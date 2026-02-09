export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      ai_embeddings: {
        Row: {
          content_hash: string | null
          created_at: string
          embedding_model: string | null
          entity_id: string
          entity_type: string
          id: string
          metadata: Json | null
          updated_at: string
        }
        Insert: {
          content_hash?: string | null
          created_at?: string
          embedding_model?: string | null
          entity_id: string
          entity_type: string
          id?: string
          metadata?: Json | null
          updated_at?: string
        }
        Update: {
          content_hash?: string | null
          created_at?: string
          embedding_model?: string | null
          entity_id?: string
          entity_type?: string
          id?: string
          metadata?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      contact_interactions: {
        Row: {
          contact_id: string
          created_at: string
          created_by: string | null
          external_id: string | null
          id: string
          interaction_date: string
          interaction_type: Database["public"]["Enums"]["interaction_type"]
          metadata: Json | null
          notes: string | null
          outcome: Database["public"]["Enums"]["outcome_status"] | null
        }
        Insert: {
          contact_id: string
          created_at?: string
          created_by?: string | null
          external_id?: string | null
          id?: string
          interaction_date?: string
          interaction_type: Database["public"]["Enums"]["interaction_type"]
          metadata?: Json | null
          notes?: string | null
          outcome?: Database["public"]["Enums"]["outcome_status"] | null
        }
        Update: {
          contact_id?: string
          created_at?: string
          created_by?: string | null
          external_id?: string | null
          id?: string
          interaction_date?: string
          interaction_type?: Database["public"]["Enums"]["interaction_type"]
          metadata?: Json | null
          notes?: string | null
          outcome?: Database["public"]["Enums"]["outcome_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_interactions_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          message: string
          name: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
        }
        Relationships: []
      }
      contact_tags: {
        Row: {
          category_id: string
          contact_id: string
          created_at: string
          id: string
          tag_type: string | null
        }
        Insert: {
          category_id: string
          contact_id: string
          created_at?: string
          id?: string
          tag_type?: string | null
        }
        Update: {
          category_id?: string
          contact_id?: string
          created_at?: string
          id?: string
          tag_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_tags_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "expertise_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_tags_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          auth_user_id: string | null
          consent_given: boolean | null
          created_at: string
          date_added: string | null
          email: string | null
          engagement_score: number | null
          external_id: string | null
          first_name: string | null
          full_name: string
          id: string
          language_preference: string | null
          last_contacted: string | null
          last_name: string | null
          linkedin_url: string | null
          location_city: string | null
          location_country: string | null
          metadata: Json | null
          notes: string | null
          organization_id: string | null
          phone: string | null
          preferred_channel: string | null
          profile_photo_url: string | null
          program_affiliation: string | null
          relationship_stage:
            | Database["public"]["Enums"]["relationship_stage"]
            | null
          role: Database["public"]["Enums"]["contact_role"]
          source: string | null
          status: string | null
          timezone: string | null
          updated_at: string
        }
        Insert: {
          auth_user_id?: string | null
          consent_given?: boolean | null
          created_at?: string
          date_added?: string | null
          email?: string | null
          engagement_score?: number | null
          external_id?: string | null
          first_name?: string | null
          full_name: string
          id?: string
          language_preference?: string | null
          last_contacted?: string | null
          last_name?: string | null
          linkedin_url?: string | null
          location_city?: string | null
          location_country?: string | null
          metadata?: Json | null
          notes?: string | null
          organization_id?: string | null
          phone?: string | null
          preferred_channel?: string | null
          profile_photo_url?: string | null
          program_affiliation?: string | null
          relationship_stage?:
            | Database["public"]["Enums"]["relationship_stage"]
            | null
          role?: Database["public"]["Enums"]["contact_role"]
          source?: string | null
          status?: string | null
          timezone?: string | null
          updated_at?: string
        }
        Update: {
          auth_user_id?: string | null
          consent_given?: boolean | null
          created_at?: string
          date_added?: string | null
          email?: string | null
          engagement_score?: number | null
          external_id?: string | null
          first_name?: string | null
          full_name?: string
          id?: string
          language_preference?: string | null
          last_contacted?: string | null
          last_name?: string | null
          linkedin_url?: string | null
          location_city?: string | null
          location_country?: string | null
          metadata?: Json | null
          notes?: string | null
          organization_id?: string | null
          phone?: string | null
          preferred_channel?: string | null
          profile_photo_url?: string | null
          program_affiliation?: string | null
          relationship_stage?:
            | Database["public"]["Enums"]["relationship_stage"]
            | null
          role?: Database["public"]["Enums"]["contact_role"]
          source?: string | null
          status?: string | null
          timezone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contacts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      expertise_categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          parent_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          parent_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          parent_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expertise_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "expertise_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      mentor_waitlist: {
        Row: {
          created_at: string
          email: string
          expertise: string | null
          first_name: string
          id: string
          last_name: string
          linkedin_url: string | null
          motivation: string | null
        }
        Insert: {
          created_at?: string
          email: string
          expertise?: string | null
          first_name: string
          id?: string
          last_name: string
          linkedin_url?: string | null
          motivation?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          expertise?: string | null
          first_name?: string
          id?: string
          last_name?: string
          linkedin_url?: string | null
          motivation?: string | null
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          created_at: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
      organization_tags: {
        Row: {
          category_id: string
          created_at: string
          id: string
          organization_id: string
        }
        Insert: {
          category_id: string
          created_at?: string
          id?: string
          organization_id: string
        }
        Update: {
          category_id?: string
          created_at?: string
          id?: string
          organization_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_tags_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "expertise_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organization_tags_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string
          email: string | null
          external_id: string | null
          id: string
          language_preference: string | null
          linkedin_url: string | null
          location_city: string | null
          location_country: string | null
          metadata: Json | null
          name: string
          notes: string | null
          org_type: string | null
          partner_type: Database["public"]["Enums"]["partner_type"] | null
          phone: string | null
          program_affiliation: string | null
          timezone: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          external_id?: string | null
          id?: string
          language_preference?: string | null
          linkedin_url?: string | null
          location_city?: string | null
          location_country?: string | null
          metadata?: Json | null
          name: string
          notes?: string | null
          org_type?: string | null
          partner_type?: Database["public"]["Enums"]["partner_type"] | null
          phone?: string | null
          program_affiliation?: string | null
          timezone?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          external_id?: string | null
          id?: string
          language_preference?: string | null
          linkedin_url?: string | null
          location_city?: string | null
          location_country?: string | null
          metadata?: Json | null
          name?: string
          notes?: string | null
          org_type?: string | null
          partner_type?: Database["public"]["Enums"]["partner_type"] | null
          phone?: string | null
          program_affiliation?: string | null
          timezone?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      page_interactions: {
        Row: {
          created_at: string
          id: string
          interaction_type: string
          metadata: Json | null
          page_name: string
        }
        Insert: {
          created_at?: string
          id?: string
          interaction_type: string
          metadata?: Json | null
          page_name: string
        }
        Update: {
          created_at?: string
          id?: string
          interaction_type?: string
          metadata?: Json | null
          page_name?: string
        }
        Relationships: []
      }
      psychometric_test_leads: {
        Row: {
          created_at: string
          id: string
          metadata: Json | null
          referral_source: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          metadata?: Json | null
          referral_source?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          metadata?: Json | null
          referral_source?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      zoho_form_submissions: {
        Row: {
          created_at: string
          form_id: string
          id: string
          submission_data: Json
          submitted_at: string | null
          sync_error: string | null
          zoho_lead_id: string | null
          zoho_sync_status: string | null
          zoho_synced_at: string | null
        }
        Insert: {
          created_at?: string
          form_id?: string
          id?: string
          submission_data: Json
          submitted_at?: string | null
          sync_error?: string | null
          zoho_lead_id?: string | null
          zoho_sync_status?: string | null
          zoho_synced_at?: string | null
        }
        Update: {
          created_at?: string
          form_id?: string
          id?: string
          submission_data?: Json
          submitted_at?: string | null
          sync_error?: string | null
          zoho_lead_id?: string | null
          zoho_sync_status?: string | null
          zoho_synced_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      contact_role: "mentee" | "mentor" | "parent" | "educator" | "admin"
      interaction_type:
        | "call"
        | "email"
        | "whatsapp"
        | "meeting"
        | "event"
        | "form_submission"
        | "other"
      outcome_status:
        | "positive"
        | "neutral"
        | "negative"
        | "pending"
        | "no_response"
      partner_type:
        | "skill_partner"
        | "ngo_partner"
        | "govt_partner"
        | "corporate_partner"
        | "faith_partner"
      relationship_stage:
        | "new_lead"
        | "contacted"
        | "engaged"
        | "qualified"
        | "converted"
        | "churned"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      contact_role: ["mentee", "mentor", "parent", "educator", "admin"],
      interaction_type: [
        "call",
        "email",
        "whatsapp",
        "meeting",
        "event",
        "form_submission",
        "other",
      ],
      outcome_status: [
        "positive",
        "neutral",
        "negative",
        "pending",
        "no_response",
      ],
      partner_type: [
        "skill_partner",
        "ngo_partner",
        "govt_partner",
        "corporate_partner",
        "faith_partner",
      ],
      relationship_stage: [
        "new_lead",
        "contacted",
        "engaged",
        "qualified",
        "converted",
        "churned",
      ],
    },
  },
} as const
