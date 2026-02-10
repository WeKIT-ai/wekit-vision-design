import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import TwaktoChat from "./components/TwaktoChat";
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
import Parents from "./pages/Parents";
import MentorWaitlist from "./pages/MentorWaitlist";
import Waitlist from "./pages/Waitlist";
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
                      <Route path="/mentor-waitlist" element={<MentorWaitlist />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                  <TwaktoChat />
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
