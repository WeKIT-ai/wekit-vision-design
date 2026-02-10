import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'What is We-KIT?', a: "We-KIT is India's first AI-powered career discovery platform that helps students find their perfect career path through scientific psychometric assessments and personalized recommendations." },
  { q: 'How does the assessment work?', a: 'Our 72-question psychometric assessment analyzes your personality, interests, skills, and values. It takes 20-30 minutes to complete and provides instant results with your Career DNA profile.' },
  { q: 'How many careers can I explore?', a: 'Our database contains 1,288+ unique career paths across 21 career families, from traditional professions to emerging fields like esports, digital art, and AI engineering.' },
  { q: 'Is We-KIT free?', a: 'Waitlist members get exclusive early access with 6 months of premium features free. After that, we offer both free and premium plans.' },
  { q: 'Who can use We-KIT?', a: 'We-KIT is designed for Indian students and professionals aged 14-50+ who are exploring careers or considering a career change.' },
  { q: 'When will We-KIT launch?', a: "We're launching soon! Join the waitlist to be notified immediately when we go live." },
  { q: 'How is my data protected?', a: 'Your data security is our priority. We use bank-level encryption and never share your information without permission.' },
  { q: 'Can I change my career recommendations?', a: 'Yes! You can retake the assessment anytime or manually explore different career paths in our database.' },
];

const WaitlistFAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="font-montserrat font-bold text-3xl md:text-[42px] text-wekit-black mb-12 text-center leading-tight">Frequently Asked Questions</motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-gray-200 rounded-xl px-6 data-[state=open]:border-wekit-blue/30 data-[state=open]:shadow-sm transition-all">
                <AccordionTrigger className="font-montserrat font-semibold text-left text-wekit-black hover:no-underline py-5">{f.q}</AccordionTrigger>
                <AccordionContent className="text-gray-500 leading-relaxed pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistFAQ;
