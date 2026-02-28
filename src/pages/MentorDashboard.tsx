import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { MapPin, Briefcase, Target, Calendar, Loader2, CheckCircle, XCircle } from "lucide-react";

interface Profile {
  id: string;
  role: string;
  full_name: string;
  bio: string;
  location: string;
  industry: string[];
  skills: string[];
  experience_level: number;
  goals: string[];
  availability: string[];
}

interface Match {
  id: string;
  compatibility_score: number;
  status: string;
  mentor_id: string;
  mentee_id: string;
  mentor?: Profile;
  mentee?: Profile;
}

const MentorDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    if (user) loadUserData();
  }, [user]);

  const loadUserData = async () => {
    if (!user) return;

    try {
      const { data: profileData, error: profileError } = await supabase
        .from("mentor_profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileError) {
        // No profile yet — redirect to onboarding
        navigate("/mentor-onboarding");
        return;
      }
      setProfile(profileData);

      const { data: matchesData, error: matchesError } = await supabase
        .from("mentor_matches")
        .select(`
          *,
          mentor:mentor_profiles!mentor_matches_mentor_id_fkey(id, full_name, bio, location, industry, skills, experience_level, goals, availability, role),
          mentee:mentor_profiles!mentor_matches_mentee_id_fkey(id, full_name, bio, location, industry, skills, experience_level, goals, availability, role)
        `)
        .or(`mentor_id.eq.${user.id},mentee_id.eq.${user.id}`)
        .order("compatibility_score", { ascending: false });

      if (matchesError) throw matchesError;
      setMatches(matchesData || []);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleMatchAction = async (matchId: string, status: "accepted" | "rejected") => {
    try {
      const { error } = await supabase
        .from("mentor_matches")
        .update({ status })
        .eq("id", matchId);

      if (error) throw error;

      toast.success(
        status === "accepted"
          ? "Match accepted! You can now connect with your match."
          : "Match declined."
      );

      loadUserData();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const getMatchProfile = (match: Match) => {
    if (profile?.role === "mentor") {
      return match.mentee;
    }
    return match.mentor;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-serif font-bold mb-2">
            Welcome back, {profile?.full_name}!
          </h2>
          <p className="text-muted-foreground text-lg">
            You're registered as a <Badge variant="outline">{profile?.role}</Badge>
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => navigate("/find-mentor")}
          >
            Browse Mentors
          </Button>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold">Your Matches</h3>

          {matches.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground text-lg mb-4">
                No matches yet. Check back soon!
              </p>
              <Button onClick={loadUserData}>Refresh Matches</Button>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.map((match) => {
                const matchProfile = getMatchProfile(match);
                if (!matchProfile) return null;

                return (
                  <Card key={match.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                          {matchProfile.full_name?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {match.compatibility_score}%
                        </div>
                        <div className="text-xs text-muted-foreground">Match</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{matchProfile.full_name}</h3>

                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="w-3 h-3 mr-1" />
                      {matchProfile.location || "Remote"}
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {matchProfile.bio}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <Briefcase className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <div className="flex flex-wrap gap-1">
                          {matchProfile.industry?.slice(0, 2).map((ind) => (
                            <Badge key={ind} variant="secondary" className="text-xs">
                              {ind}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <div className="flex flex-wrap gap-1">
                          {matchProfile.skills?.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {matchProfile.experience_level} years experience
                        </span>
                      </div>
                    </div>

                    {match.status === "pending" && (
                      <div className="flex gap-2">
                        <Button
                          className="flex-1"
                          onClick={() => handleMatchAction(match.id, "accepted")}
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Accept
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleMatchAction(match.id, "rejected")}
                        >
                          <XCircle className="w-4 h-4 mr-1" />
                          Decline
                        </Button>
                      </div>
                    )}

                    {match.status === "accepted" && (
                      <Badge className="w-full justify-center py-2 bg-green-600">
                        ✓ Connected
                      </Badge>
                    )}

                    {match.status === "rejected" && (
                      <Badge variant="secondary" className="w-full justify-center py-2">
                        Declined
                      </Badge>
                    )}
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MentorDashboard;
