
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Student',
      content: 'We-KIT helped me discover my passion for environmental science and connected me with amazing mentors.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Parent',
      content: 'The platform gave my daughter clarity about her future and the confidence to pursue her dreams.',
      rating: 5,
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Educator',
      content: 'As a school counselor, I recommend We-KIT to students who need personalized career guidance.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600">What our users have to say</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100">
                  <img 
                    src="https://via.placeholder.com/128" 
                    alt="Testimonial Avatar"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="flex items-center">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 ml-2">({testimonial.rating}/5)</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
