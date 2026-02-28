import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Users, MapPin, Briefcase, Search, Filter } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface MentorProfile {
  id: string;
  full_name: string;
  bio: string;
  location: string;
  industry: string[] | null;
  skills: string[] | null;
  experience_level: number | null;
  availability: string[] | null;
  avatar_url: string | null;
}

const industries = [
  "Technology", "Finance", "Healthcare", "Education", "Marketing",
  "Consulting", "Engineering", "Design", "Sales", "Other",
];

const FindMentor = () => {
  const { user } = useAuth();
  const [mentors, setMentors] = useState<MentorProfile[]>([]);
  const [filteredMentors, setFilteredMentors] = useState<MentorProfile[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [minExperience, setMinExperience] = useState(0);
  const [skillSearch, setSkillSearch] = useState("");
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    fetchMentors();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [mentors, searchQuery, selectedIndustries, locationFilter, minExperience, skillSearch]);

  const fetchMentors = async () => {
    try {
      const { data, error } = await supabase
        .from("mentor_profiles")
        .select("*")
        .eq("role", "mentor");

      if (error) throw error;

      setMentors(data || []);
      setFilteredMentors(data || []);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...mentors];

    if (searchQuery) {
      filtered = filtered.filter(
        (mentor) =>
          mentor.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          mentor.bio?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedIndustries.length > 0) {
      filtered = filtered.filter((mentor) =>
        mentor.industry?.some((ind) => selectedIndustries.includes(ind))
      );
    }

    if (locationFilter) {
      filtered = filtered.filter((mentor) =>
        mentor.location?.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (minExperience > 0) {
      filtered = filtered.filter(
        (mentor) => (mentor.experience_level || 0) >= minExperience
      );
    }

    if (skillSearch) {
      filtered = filtered.filter((mentor) =>
        mentor.skills?.some((skill) =>
          skill.toLowerCase().includes(skillSearch.toLowerCase())
        )
      );
    }

    setFilteredMentors(filtered);
  };

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedIndustries([]);
    setLocationFilter("");
    setMinExperience(0);
    setSkillSearch("");
  };

  const handleConnect = async (mentorId: string) => {
    if (!user) return;

    try {
      // Create a match request
      const { error } = await supabase
        .from("mentor_matches")
        .insert({
          mentor_id: mentorId,
          mentee_id: user.id,
          compatibility_score: 0,
          status: "pending",
        });

      if (error) {
        if (error.code === "23505") {
          toast.info("You've already sent a connection request to this mentor.");
        } else {
          throw error;
        }
        return;
      }

      toast.success("Connection request sent! The mentor will be notified.");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Find a Mentor</h1>
          <p className="text-muted-foreground">
            Connect with experienced professionals who can guide your journey
          </p>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <aside
            className={`${showFilters ? "w-80" : "w-0"} transition-all duration-300 overflow-hidden hidden md:block`}
          >
            <Card className="sticky top-24">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filters
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                    Clear All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Name or keywords..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Industry</Label>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {industries.map((industry) => (
                      <div key={industry} className="flex items-center space-x-2">
                        <Checkbox
                          id={`industry-${industry}`}
                          checked={selectedIndustries.includes(industry)}
                          onCheckedChange={() => toggleIndustry(industry)}
                        />
                        <label htmlFor={`industry-${industry}`} className="text-sm cursor-pointer">
                          {industry}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input
                    placeholder="City, country..."
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Minimum Experience: {minExperience} years</Label>
                  <Slider
                    value={[minExperience]}
                    onValueChange={(values) => setMinExperience(values[0])}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Skills</Label>
                  <Input
                    placeholder="Search skills..."
                    value={skillSearch}
                    onChange={(e) => setSkillSearch(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Mentors Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                {filteredMentors.length} mentor{filteredMentors.length !== 1 ? "s" : ""} found
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="hidden md:flex"
              >
                <Filter className="w-4 h-4 mr-2" />
                {showFilters ? "Hide" : "Show"} Filters
              </Button>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading mentors...</p>
              </div>
            ) : filteredMentors.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No mentors found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search criteria
                  </p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMentors.map((mentor) => (
                  <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{mentor.full_name}</CardTitle>
                            {mentor.location && (
                              <CardDescription className="flex items-center gap-1 mt-1">
                                <MapPin className="w-3 h-3" />
                                {mentor.location}
                              </CardDescription>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {mentor.bio || "No bio available"}
                      </p>

                      {mentor.experience_level && (
                        <div className="flex items-center gap-2 text-sm">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span>{mentor.experience_level} years experience</span>
                        </div>
                      )}

                      {mentor.industry && mentor.industry.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {mentor.industry.slice(0, 3).map((ind) => (
                            <Badge key={ind} variant="secondary">{ind}</Badge>
                          ))}
                          {mentor.industry.length > 3 && (
                            <Badge variant="outline">+{mentor.industry.length - 3}</Badge>
                          )}
                        </div>
                      )}

                      {mentor.skills && mentor.skills.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted-foreground">Skills</p>
                          <div className="flex flex-wrap gap-1">
                            {mentor.skills.slice(0, 4).map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                            ))}
                            {mentor.skills.length > 4 && (
                              <Badge variant="outline" className="text-xs">+{mentor.skills.length - 4}</Badge>
                            )}
                          </div>
                        </div>
                      )}

                      <Button className="w-full" onClick={() => handleConnect(mentor.id)}>
                        Connect
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default FindMentor;
