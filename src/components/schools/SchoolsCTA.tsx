
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const SchoolsCTA = () => {
  return (
    <section className="py-32 px-6 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
          Transform Student Outcomes with
          <br />
          <span className="font-medium text-red-600">WeKIT International</span>
        </h2>
        <p className="text-xl text-gray-500 font-light leading-relaxed">
          Whether you're a high school, college, university, or training center - your students deserve better than a 41% job placement rate. 
          Partner with WeKIT International to make every graduate job-ready and industry-connected.
        </p>
        <p className="text-lg text-gray-400 italic">
          "Vot Kareer Is iT?" - We help your students find their answer
        </p>
        <div className="pt-8">
          <Button 
            size="lg" 
            className="bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-medium rounded-none border-0 shadow-none hover:shadow-none"
          >
            Schedule Impact Assessment
            <ArrowRight className="ml-3" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SchoolsCTA;
