
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const AboutCTA = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center text-primary-foreground">
        <h2 className="text-4xl font-bold font-montserrat mb-6">Ready to Join Our Mission?</h2>
        <p className="text-xl mb-8 text-primary-foreground/70">
          Whether you're a student seeking guidance or a professional ready to mentor, 
          there's a place for you in the WeKIT International community.
        </p>
        <p className="text-lg mb-8 text-primary-foreground/50 italic">
          "Wot Kareer Is iT?" — Let's find out together
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://purpose-pathway-pilot.lovable.app/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300">
              Join as Student
            </Button>
          </a>
          <a href="/mentor-waitlist">
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium transition-all duration-300">
              Become a Mentor
            </Button>
          </a>
          <a href="https://www.topmate.io/yvonne_roberts_wekit/page/5wlgL5jOcR" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300">
              <Calendar className="mr-2" size={20} />
              Talk to Our Team
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
