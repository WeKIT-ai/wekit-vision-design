import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import CertificationCard, { type CertificationCourse } from './CertificationCard';

const professionalCourses: CertificationCourse[] = [
  { title: 'WeKIT Certified in Emotional Intelligence & Resilience', slug: 'emotional-intelligence-resilience', summary: 'Master the science of emotional awareness, self-regulation, and resilience to lead with empathy and clarity in complex environments.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Emotional Intelligence', 'Resilience', 'Leadership'] },
  { title: 'WeKIT Certified in AI Literacy & Responsible Innovation', slug: 'ai-literacy-responsible-innovation', summary: 'Build foundational AI literacy and learn to apply responsible innovation frameworks that align technology with ethics.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['AI Literacy', 'Responsible AI', 'Innovation'] },
  { title: 'WeKIT Certified in Financial Intelligence for Professionals', slug: 'financial-intelligence-professionals', summary: 'Develop strategic financial acumen to make data-driven decisions, manage risk, and drive sustainable business growth.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Financial Literacy', 'Strategy', 'Decision-Making'] },
  { title: 'WeKIT Certified in Purpose-Led Career Architecture', slug: 'purpose-led-career-architecture', summary: 'Design a career aligned with your values and strengths using purpose-driven frameworks and strategic planning tools.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Career Design', 'Purpose', 'Strategy'] },
  { title: 'WeKIT Certified in Ethical Decision-Making in Business', slug: 'ethical-decision-making-business', summary: 'Navigate complex ethical dilemmas with structured decision-making models rooted in integrity, governance, and accountability.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Ethics', 'Governance', 'Business'] },
  { title: 'WeKIT Certified in Digital Responsibility & Reputation', slug: 'digital-responsibility-reputation', summary: 'Build and protect your digital footprint with strategies for responsible online presence and professional reputation management.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Digital Identity', 'Reputation', 'Responsibility'] },
  { title: 'WeKIT Certified in Leadership Presence & Personal Mastery', slug: 'leadership-presence-personal-mastery', summary: 'Cultivate executive presence, personal mastery, and influence to lead with authenticity and impact at every level.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Leadership', 'Executive Presence', 'Mastery'] },
];

const corporateCourses: CertificationCourse[] = [
  { title: 'Corporate Emotional Intelligence & Resilient Leadership Program', slug: 'corporate-emotional-intelligence', summary: 'Equip your leadership team with emotional intelligence and resilience skills to navigate uncertainty and drive team performance.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Corporate', 'Leadership', 'EI'] },
  { title: 'Responsible AI Adoption for Enterprises', slug: 'responsible-ai-enterprise', summary: 'Guide your organization through ethical AI adoption with governance frameworks, risk assessment, and responsible deployment strategies.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Enterprise AI', 'Governance', 'Risk'] },
  { title: 'Financial Wellness for Employees', slug: 'financial-wellness-employees', summary: 'Empower employees with financial literacy and wellness programs that improve productivity, retention, and well-being.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Financial Wellness', 'Employee Benefits', 'HR'] },
  { title: 'Purpose-Driven Talent Development Lab', slug: 'purpose-driven-talent-development', summary: 'Transform your talent pipeline with purpose-driven development programs that align individual growth with organizational mission.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Talent Development', 'Purpose', 'L&D'] },
  { title: 'Ethical Culture & Governance Certification', slug: 'ethical-culture-governance', summary: 'Build an ethical organizational culture with robust governance structures, compliance frameworks, and values-driven leadership.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Ethics', 'Culture', 'Governance'] },
  { title: 'Digital Transformation Mindset Certification', slug: 'digital-transformation-mindset', summary: 'Shift organizational mindsets for digital transformation success with change management and innovation thinking frameworks.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Digital Transformation', 'Change Management', 'Innovation'] },
  { title: 'Career Mobility & Internal Talent Architecture Program', slug: 'career-mobility-talent-architecture', summary: 'Design internal career mobility pathways that retain talent, reduce attrition, and build a future-ready workforce.', duration: '6–8 Weeks | Customizable', format: 'Hybrid | Virtual | Enterprise Cohort', tags: ['Career Mobility', 'Retention', 'Workforce Planning'] },
];

const CertificationsSection = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-wekit-soft">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground tracking-tight">
            WeKIT Professional & Corporate Certifications
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Future-ready certifications designed for professionals, leaders and enterprises navigating the AI-driven world.
          </p>
        </div>

        <Tabs defaultValue="professional" className="w-full">
          <div className="flex justify-center">
            <TabsList className="bg-background border border-border p-1.5 h-auto">
              <TabsTrigger
                value="professional"
                className="px-6 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
              >
                Professional Certifications
              </TabsTrigger>
              <TabsTrigger
                value="corporate"
                className="px-6 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
              >
                Corporate & Enterprise Programs
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="professional" className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalCourses.map((course) => (
                <CertificationCard key={course.slug} course={course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="corporate" className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corporateCourses.map((course) => (
                <CertificationCard key={course.slug} course={course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CertificationsSection;
