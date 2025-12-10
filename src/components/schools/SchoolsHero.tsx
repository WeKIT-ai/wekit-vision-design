import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap } from 'lucide-react';

const SchoolsHero = () => {
  return (
    <section className="pt-32 pb-24 px-6 md:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <GraduationCap size={18} />
            Grades 8–12 Framework
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
            WeKIT for Schools & Colleges
            <br />
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Future-Ready Spine
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            Move from "we care about life skills" to proof-backed, AI-powered mentoring 
            and credentialing across Grades 8–12—without timetable chaos.
          </p>
          
          <div className="bg-white border border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Partner with WeKIT?</h3>
            <p className="text-gray-600 leading-relaxed">
              Institutions get a clear, board-sensitive framework that integrates 
              <span className="font-medium text-blue-700"> life skills, mentoring, careers and purpose</span>—fully 
              mapped to CBSE/ICSE and Cambridge/PSHE outcomes.
            </p>
          </div>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Explore Our Framework
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-gray-300 hover:border-blue-600 px-10 py-6 text-lg font-medium rounded-xl"
            >
              Download One-Pager
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsHero;
