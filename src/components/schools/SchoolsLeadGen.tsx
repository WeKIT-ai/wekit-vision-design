import DemoRequestForm from '@/components/lead-gen/DemoRequestForm';
import PartnershipInquiry from '@/components/lead-gen/PartnershipInquiry';
import WALSCompact from '@/components/schools/WALSCompact';

const SchoolsLeadGen = () => {
  return (
    <>
      <section className="py-16 px-6 md:px-8 bg-wekit-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat text-foreground mb-4">Start Making Your Students Job-Ready Today</h2>
            <p className="text-xl text-muted-foreground">See how our platform can transform student outcomes at your institution</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <DemoRequestForm />
            </div>
            <div className="space-y-6">
              <WALSCompact />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat text-foreground mb-4">Ready to Connect Students with Industry?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can solve your specific career services challenges and make your students industry-ready.
            </p>
          </div>
          <PartnershipInquiry />
        </div>
      </section>
    </>
  );
};

export default SchoolsLeadGen;
