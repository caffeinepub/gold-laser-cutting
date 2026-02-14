import { useRef } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Kumar Jewellers, Etawah',
      rating: 5,
      text: 'Excellent service! The precision and quality of laser cutting is outstanding. We have been working with Gold Laser Cutting for over 2 years and they never disappoint. Highly recommended for all jewellery shop owners.',
    },
    {
      name: 'Priya Sharma',
      business: 'Sharma Gold House',
      rating: 5,
      text: 'Best laser cutting service in Etawah! The team is professional, delivery is always on time, and the finishing is perfect. Their advanced machines can handle even the most intricate designs with ease.',
    },
    {
      name: 'Amit Verma',
      business: 'Verma Jewellery Store',
      rating: 5,
      text: 'I am extremely satisfied with their work. The custom design cutting they did for my shop was flawless. Affordable pricing and fast turnaround make them the go-to choice for laser cutting in the region.',
    },
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gold-text">Clients Say</span>
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by jewellery businesses across Etawah and nearby cities
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-background border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 150}ms` }}
            >
              <CardContent className="pt-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/90 mb-6 leading-relaxed">{testimonial.text}</p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
