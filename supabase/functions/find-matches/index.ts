import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface Profile {
  id: string;
  role: string;
  industry: string[];
  skills: string[];
  experience_level: number;
  goals: string[];
  availability: string[];
  location: string;
}

function calculateCompatibility(user: Profile, candidate: Profile): number {
  let score = 0;

  // Industry match (30 points)
  const industryMatch = user.industry.filter(i => candidate.industry.includes(i)).length;
  score += Math.min((industryMatch / Math.max(user.industry.length, 1)) * 30, 30);

  // Skills match (25 points)
  const skillsMatch = user.skills.filter(s => candidate.skills.includes(s)).length;
  score += Math.min((skillsMatch / Math.max(user.skills.length, 1)) * 25, 25);

  // Goals match (20 points)
  const goalsMatch = user.goals.filter(g => candidate.goals.includes(g)).length;
  score += Math.min((goalsMatch / Math.max(user.goals.length, 1)) * 20, 20);

  // Availability match (15 points)
  const availabilityMatch = user.availability.filter(a => candidate.availability.includes(a)).length;
  score += Math.min((availabilityMatch / Math.max(user.availability.length, 1)) * 15, 15);

  // Location match (10 points)
  if (user.location && candidate.location && user.location === candidate.location) {
    score += 10;
  }

  return Math.round(score);
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { userId } = await req.json();

    if (!userId) {
      throw new Error('User ID is required');
    }

    console.log('Finding matches for user:', userId);

    // Get user profile
    const { data: userProfile, error: profileError } = await supabase
      .from('mentor_profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (profileError) throw profileError;

    console.log('User profile:', userProfile);

    // Get candidates (opposite role)
    const oppositeRole = userProfile.role === 'mentor' ? 'mentee' : 'mentor';
    const { data: candidates, error: candidatesError } = await supabase
      .from('mentor_profiles')
      .select('*')
      .eq('role', oppositeRole)
      .neq('id', userId);

    if (candidatesError) throw candidatesError;

    console.log(`Found ${candidates?.length || 0} potential matches`);

    if (!candidates || candidates.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No potential matches found yet' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Calculate compatibility and create matches
    const matches = [];
    for (const candidate of candidates) {
      const score = calculateCompatibility(userProfile, candidate);

      // Only create matches with score >= 30
      if (score >= 30) {
        const mentorId = userProfile.role === 'mentor' ? userProfile.id : candidate.id;
        const menteeId = userProfile.role === 'mentee' ? userProfile.id : candidate.id;

        // Check if match already exists
        const { data: existing } = await supabase
          .from('mentor_matches')
          .select('id')
          .eq('mentor_id', mentorId)
          .eq('mentee_id', menteeId)
          .single();

        if (!existing) {
          const { data: newMatch, error: matchError } = await supabase
            .from('mentor_matches')
            .insert({
              mentor_id: mentorId,
              mentee_id: menteeId,
              compatibility_score: score,
              status: 'pending',
            })
            .select()
            .single();

          if (!matchError && newMatch) {
            matches.push(newMatch);
            console.log(`Created match with score ${score}`);
          }
        }
      }
    }

    console.log(`Created ${matches.length} new matches`);

    return new Response(
      JSON.stringify({ 
        message: `Found ${matches.length} new matches!`,
        matches 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error finding matches:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
