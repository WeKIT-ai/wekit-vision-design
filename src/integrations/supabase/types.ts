export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      assessment_results: {
        Row: {
          career_recommendations: Json | null
          created_at: string
          id: string
          personality_scores: Json
          skills_data: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          career_recommendations?: Json | null
          created_at?: string
          id?: string
          personality_scores: Json
          skills_data: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          career_recommendations?: Json | null
          created_at?: string
          id?: string
          personality_scores?: Json
          skills_data?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      career_roadmaps: {
        Row: {
          career_family: string
          created_at: string
          id: string
          mentor_matches: Json | null
          milestones: Json | null
          progress_tracking: Json | null
          recommended_paths: Json
          resources: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          career_family: string
          created_at?: string
          id?: string
          mentor_matches?: Json | null
          milestones?: Json | null
          progress_tracking?: Json | null
          recommended_paths: Json
          resources?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          career_family?: string
          created_at?: string
          id?: string
          mentor_matches?: Json | null
          milestones?: Json | null
          progress_tracking?: Json | null
          recommended_paths?: Json
          resources?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          company: string | null
          email: string
          id: string
          message: string
          name: string
          source_page: string | null
          status: string | null
          submitted_at: string
        }
        Insert: {
          company?: string | null
          email: string
          id?: string
          message: string
          name: string
          source_page?: string | null
          status?: string | null
          submitted_at?: string
        }
        Update: {
          company?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          source_page?: string | null
          status?: string | null
          submitted_at?: string
        }
        Relationships: []
      }
      mentor_profiles: {
        Row: {
          availability: Json | null
          bio: string | null
          company: string | null
          created_at: string
          current_mentees: number | null
          email: string
          experience_years: number | null
          first_name: string
          id: string
          industry: string | null
          is_active: boolean | null
          is_verified: boolean | null
          last_name: string
          mentoring_capacity: number | null
          position: string | null
          specialties: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          availability?: Json | null
          bio?: string | null
          company?: string | null
          created_at?: string
          current_mentees?: number | null
          email: string
          experience_years?: number | null
          first_name: string
          id?: string
          industry?: string | null
          is_active?: boolean | null
          is_verified?: boolean | null
          last_name: string
          mentoring_capacity?: number | null
          position?: string | null
          specialties?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          availability?: Json | null
          bio?: string | null
          company?: string | null
          created_at?: string
          current_mentees?: number | null
          email?: string
          experience_years?: number | null
          first_name?: string
          id?: string
          industry?: string | null
          is_active?: boolean | null
          is_verified?: boolean | null
          last_name?: string
          mentoring_capacity?: number | null
          position?: string | null
          specialties?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      mentorship_connections: {
        Row: {
          completion_date: string | null
          connection_date: string | null
          created_at: string
          id: string
          match_score: number | null
          mentee_id: string
          mentor_id: string
          notes: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          completion_date?: string | null
          connection_date?: string | null
          created_at?: string
          id?: string
          match_score?: number | null
          mentee_id: string
          mentor_id: string
          notes?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          completion_date?: string | null
          connection_date?: string | null
          created_at?: string
          id?: string
          match_score?: number | null
          mentee_id?: string
          mentor_id?: string
          notes?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "mentorship_connections_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "youth_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mentorship_connections_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "mentor_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscriptions: {
        Row: {
          email: string
          id: string
          is_active: boolean
          source_page: string | null
          subscribed_at: string
        }
        Insert: {
          email: string
          id?: string
          is_active?: boolean
          source_page?: string | null
          subscribed_at?: string
        }
        Update: {
          email?: string
          id?: string
          is_active?: boolean
          source_page?: string | null
          subscribed_at?: string
        }
        Relationships: []
      }
      page_interactions: {
        Row: {
          created_at: string
          id: string
          interaction_data: Json | null
          interaction_type: string
          page_name: string
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          interaction_data?: Json | null
          interaction_type: string
          page_name: string
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          interaction_data?: Json | null
          interaction_type?: string
          page_name?: string
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      psychometric_test_leads: {
        Row: {
          created_at: string
          email: string | null
          id: string
          referral_source: string | null
          test_completed_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          referral_source?: string | null
          test_completed_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          referral_source?: string | null
          test_completed_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          assigned_at: string | null
          assigned_by: string | null
          id: string
          is_active: boolean | null
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          assigned_at?: string | null
          assigned_by?: string | null
          id?: string
          is_active?: boolean | null
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          assigned_at?: string | null
          assigned_by?: string | null
          id?: string
          is_active?: boolean | null
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      white_paper_leads: {
        Row: {
          created_at: string
          downloaded_at: string
          email: string
          id: string
          name: string
          phone: string
          user_type: string
        }
        Insert: {
          created_at?: string
          downloaded_at?: string
          email: string
          id?: string
          name: string
          phone: string
          user_type: string
        }
        Update: {
          created_at?: string
          downloaded_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string
          user_type?: string
        }
        Relationships: []
      }
      youth_profiles: {
        Row: {
          career_goals: string | null
          challenges: string | null
          communication_consent: boolean | null
          created_at: string
          data_consent: boolean | null
          date_of_birth: string | null
          education: string | null
          email: string
          first_name: string
          gender: string | null
          grade: string | null
          id: string
          interests: string[] | null
          languages: string[] | null
          last_name: string
          location: string | null
          onboarding_completed: boolean | null
          parental_consent: boolean | null
          phone: string | null
          school: string | null
          subjects: string[] | null
          time_commitment: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          career_goals?: string | null
          challenges?: string | null
          communication_consent?: boolean | null
          created_at?: string
          data_consent?: boolean | null
          date_of_birth?: string | null
          education?: string | null
          email: string
          first_name: string
          gender?: string | null
          grade?: string | null
          id?: string
          interests?: string[] | null
          languages?: string[] | null
          last_name: string
          location?: string | null
          onboarding_completed?: boolean | null
          parental_consent?: boolean | null
          phone?: string | null
          school?: string | null
          subjects?: string[] | null
          time_commitment?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          career_goals?: string | null
          challenges?: string | null
          communication_consent?: boolean | null
          created_at?: string
          data_consent?: boolean | null
          date_of_birth?: string | null
          education?: string | null
          email?: string
          first_name?: string
          gender?: string | null
          grade?: string | null
          id?: string
          interests?: string[] | null
          languages?: string[] | null
          last_name?: string
          location?: string | null
          onboarding_completed?: boolean | null
          parental_consent?: boolean | null
          phone?: string | null
          school?: string | null
          subjects?: string[] | null
          time_commitment?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: Database["public"]["Enums"]["app_role"]
      }
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "mentor" | "youth" | "institution" | "corporate"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "mentor", "youth", "institution", "corporate"],
    },
  },
} as const
