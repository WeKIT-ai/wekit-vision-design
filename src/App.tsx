import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import YomaChat from "./components/YomaChat";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Schools from "./pages/Schools";
import Students from "./pages/Students";
import Professionals from "./pages/Professionals";
import NGOs from "./pages/NGOs";
import Investors from "./pages/Investors";
import Courses from "./pages/Courses";
import Microlearning from "./pages/Microlearning";
import StartJourney from "./pages/StartJourney";
import Roadmap from "./pages/Roadmap";
import WhitePaper from "./pages/WhitePaper";
import NotFound from "./pages/NotFound";
import Programs from "./pages/Programs";
import Mentorship from "./pages/Mentorship";
import Enterprise from "./pages/Enterprise";
import Resources from "./pages/Resources";
import Parents from "./pages/Parents";
import MentorWaitlist from "./pages/MentorWaitlist";
import Waitlist from "./pages/Waitlist";
import MentorOnboarding from "./pages/MentorOnboarding";
import MentorDashboard from "./pages/MentorDashboard";
import FindMentor from "./pages/FindMentor";
import AdminSyncDashboard from "./pages/AdminSyncDashboard";
import TermsAndConditions from "./pages/TermsAndConditions";
import CollegeDiscovery from "./pages/CollegeDiscovery";
import ProtectedRoute from "./components/ProtectedRoute";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-white">
            <Routes>
              {/* Standalone page with its own nav/footer */}
              <Route path="/waitlist" element={<Waitlist />} />

              {/* Main layout pages */}
              <Route path="*" element={
                <>
                  <Navigation />
                  <main className="flex-1 pt-20">
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/auth" element={<Auth />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/schools" element={<Schools />} />
                      <Route path="/students" element={<Students />} />
                      <Route path="/parents" element={<Parents />} />
                      <Route path="/professionals" element={<Professionals />} />
                      <Route path="/ngos" element={<NGOs />} />
                      <Route path="/investors" element={<Investors />} />
                      <Route path="/courses" element={<Courses />} />
                      <Route path="/microlearning" element={<Microlearning />} />
                      <Route path="/start-journey" element={<StartJourney />} />
                      <Route path="/roadmap" element={<Roadmap />} />
                      <Route path="/white-paper" element={<WhitePaper />} />
                      <Route path="/programs" element={<Programs />} />
                      <Route path="/mentorship" element={<Mentorship />} />
                      <Route path="/enterprise" element={<Enterprise />} />
                      <Route path="/resources" element={<Resources />} />
                      <Route path="/mentor-waitlist" element={<MentorWaitlist />} />
                      <Route path="/mentor-onboarding" element={<ProtectedRoute><MentorOnboarding /></ProtectedRoute>} />
                      <Route path="/mentor-dashboard" element={<ProtectedRoute><MentorDashboard /></ProtectedRoute>} />
                      <Route path="/find-mentor" element={<ProtectedRoute><FindMentor /></ProtectedRoute>} />
                      <Route path="/admin/sync" element={<ProtectedRoute><AdminSyncDashboard /></ProtectedRoute>} />
                      <Route path="/terms" element={<TermsAndConditions />} />
                      <Route path="/discover" element={<CollegeDiscovery />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                  <YomaChat />
                </>
              } />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
