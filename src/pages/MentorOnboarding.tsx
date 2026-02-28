import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, UserCheck, Users } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const industries = [
  "Technology", "Finance", "Healthcare", "Education", "Marketing",
  "Design", "Engineering", "Sales", "Operations", "Human Resources"
];

const availabilityOptions = [
  "Weekday Mornings", "Weekday Afternoons", "Weekday Evenings",
  "Weekend Mornings", "Weekend Afternoons", "Flexible"
];

const MentorOnboarding = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<"mentor" | "mentee" | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    bio: "",
    location: "",
    industry: [] as string[],
    skills: "",
    experienceLevel: 5,
    goals: "",
    availability: [] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || !user) return;

    setLoading(true);

    try {
      const { error } = await supabase
        .from("mentor_profiles")
        .insert({
          id: user.id,
          role,
          full_name: formData.fullName,
          email: user.email,
          bio: formData.bio,
          location: formData.location,
          industry: formData.industry,
          skills: formData.skills.split(",").map(s => s.trim()).filter(Boolean),
          experience_level: formData.experienceLevel,
          goals: formData.goals.split(",").map(g => g.trim()).filter(Boolean),
          availability: formData.availability,
        });

      if (error) throw error;

      // Trigger matching
      await supabase.functions.invoke("find-matches", {
        body: { userId: user.id },
      });

      toast.success("Profile created! Finding your matches...");
      navigate("/mentor-dashboard");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!role) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold mb-4">Choose Your Path</h1>
            <p className="text-xl text-muted-foreground">
              Are you here to mentor or be mentored?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card
              className="p-8 cursor-pointer hover:border-primary transition-all hover:shadow-lg"
              onClick={() => setRole("mentor")}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserCheck className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-serif font-bold">I'm a Mentor</h2>
                <p className="text-muted-foreground">
                  Share your experience and help others grow in their careers
                </p>
                <Button variant="outline" className="w-full">
                  Continue as Mentor
                </Button>
              </div>
            </Card>

            <Card
              className="p-8 cursor-pointer hover:border-primary transition-all hover:shadow-lg"
              onClick={() => setRole("mentee")}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-serif font-bold">I'm a Mentee</h2>
                <p className="text-muted-foreground">
                  Connect with experienced mentors to accelerate your growth
                </p>
                <Button variant="outline" className="w-full">
                  Continue as Mentee
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold mb-2">
            Complete Your Profile
          </h1>
          <p className="text-muted-foreground">
            Help us find your perfect {role === "mentor" ? "mentee" : "mentor"}
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio *</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                required
                placeholder="Tell us about yourself..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Mumbai, India"
              />
            </div>

            <div className="space-y-2">
              <Label>Industry (Select up to 3)</Label>
              <Select
                onValueChange={(value) => {
                  if (formData.industry.length < 3 && !formData.industry.includes(value)) {
                    setFormData({ ...formData, industry: [...formData.industry, value] });
                  }
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select industries" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((ind) => (
                    <SelectItem key={ind} value={ind}>
                      {ind}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.industry.map((ind) => (
                  <span
                    key={ind}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm cursor-pointer"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        industry: formData.industry.filter((i) => i !== ind),
                      })
                    }
                  >
                    {ind} ×
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Skills (comma separated) *</Label>
              <Input
                id="skills"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                required
                placeholder="React, TypeScript, Leadership"
              />
            </div>

            <div className="space-y-2">
              <Label>
                Experience Level: {formData.experienceLevel} years
              </Label>
              <Slider
                value={[formData.experienceLevel]}
                onValueChange={(value) =>
                  setFormData({ ...formData, experienceLevel: value[0] })
                }
                max={10}
                step={1}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals">
                {role === "mentor" ? "What can you help with?" : "What are your goals?"} (comma separated) *
              </Label>
              <Input
                id="goals"
                value={formData.goals}
                onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                required
                placeholder="Career growth, Technical skills, Leadership"
              />
            </div>

            <div className="space-y-2">
              <Label>Availability (Select all that apply)</Label>
              <div className="grid grid-cols-2 gap-2">
                {availabilityOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.availability.includes(option)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData({
                            ...formData,
                            availability: [...formData.availability, option],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            availability: formData.availability.filter(
                              (a) => a !== option
                            ),
                          });
                        }
                      }}
                      className="rounded border-input"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Complete Profile & Find Matches
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default MentorOnboarding;
