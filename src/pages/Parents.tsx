
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Parents = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Empowering Parents to Guide Their Children's Future
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          At WEKIT, we understand that parents play a crucial role in their child&#39;s educational and career journey. Our platform equips you with the tools and insights to support your child&#39;s aspirations with confidence.
        </p>
        <ul className="text-left text-gray-700 mb-8 space-y-4">
          <li>
            <span className="font-semibold">Personalized Roadmaps:</span> Get matched mentorship journeys tailored for your child&#39;s skills, interests, and ambitions.
          </li>
          <li>
            <span className="font-semibold">Skill-Building Resources:</span> Access curated learning modules and activities to help your child stay ahead.
          </li>
          <li>
            <span className="font-semibold">Progress Insights:</span> Track milestones and achievements to celebrate every win together.
          </li>
          <li>
            <span className="font-semibold">Expert Guidance:</span> Connect with accomplished mentors, counselors, and a community of supportive parents.
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            size="lg"
            variant="default"
            className="w-full sm:w-auto flex items-center justify-center gap-2"
            onClick={() => navigate("/white-paper")}
          >
            <FileText className="w-5 h-5" />
            Download White Paper
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Parents;
