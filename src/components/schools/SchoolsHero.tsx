
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const SchoolsHero = () => {
  return (
    <section className="pt-32 pb-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-12">
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 leading-[0.9] tracking-tight">
            Make Your Students
            <br />
            <span className="font-medium text-red-600">Job-Ready & Industry-Connected</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            Partner with educational institutions worldwide - from schools and colleges to universities and training centers. 
            Our AI-driven platform ensures your students graduate with real-world skills and industry connections.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-red-800 font-medium">
              <strong>The Challenge:</strong> 60% of employers say recent graduates lack job-ready skills, 
              while 73% of students feel unprepared for the workforce across all educational levels.
            </p>
          </div>
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-none border-0 shadow-none hover:shadow-none"
            >
              See Our Solution
              <ArrowRight className="ml-3" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsHero;
