import { useRef } from 'react';
import { Award, Cpu, CheckCircle, Zap, Users, DollarSign } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef);

  const reasons = [
    {
      icon: Award,
      title: '5+ Years Experience',
      description: 'Proven track record in jewellery laser cutting',
    },
    {
      icon: Cpu,
      title: 'Advanced Laser Machine',
      description: 'State-of-the-art technology for precision work',
    },
    {
      icon: CheckCircle,
      title: 'Perfect Finishing',
      description: 'Flawless results with attention to detail',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality',
    },
    {
      icon: Users,
      title: 'Trusted by Local Jewellers',
      description: 'Preferred choice of jewellery shops in Etawah',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates for premium quality service',
    },
  ];

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gold-text">Us</span>
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us the best choice for laser cutting in Etawah
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="mb-4 p-4 rounded-full bg-primary/10">
                <reason.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
