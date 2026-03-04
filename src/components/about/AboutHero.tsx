import { Heart } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-8 overflow-hidden bg-wekit-soft">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground mb-8">
          <Heart className="w-4 h-4 mr-2 text-wekit-teal" />
          WeKIT International — Wot Kareer Is iT?
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-foreground mb-8 leading-tight">
          About <span className="text-wekit-teal">WeKIT</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          WeKIT International Pvt Limited is on a mission to bridge the gap between potential and opportunity, 
          connecting young minds with the guidance they need to thrive in an AI-powered world.
        </p>

        <p className="text-lg text-muted-foreground mt-4 italic">
          "Wot Kareer Is iT?" — Helping you discover your perfect career path
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
