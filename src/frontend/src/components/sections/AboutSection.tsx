import { useRef } from 'react';
import { Award, Zap, Target, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef);

  const highlights = [
    { icon: Award, label: '5+ Years Experience' },
    { icon: Zap, label: 'Advanced Technology' },
    { icon: Target, label: 'High Precision' },
    { icon: Users, label: 'Trusted in Etawah' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gold-text">Gold Laser Cutting</span>
            </h2>
            <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for precision jewellery laser cutting in Etawah, Uttar Pradesh
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              With over <strong className="text-primary">5+ years of experience</strong> in the jewellery laser cutting industry, 
              Gold Laser Cutting has established itself as the premier choice for jewellery shop owners and retail customers 
              in <strong className="text-primary">Etawah and nearby cities</strong>.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              We provide <strong className="text-primary">all types of jewellery cutting</strong> using state-of-the-art 
              advanced laser machines that deliver <strong className="text-primary">high precision and fine finishing</strong>. 
              Our cutting-edge technology ensures every piece meets the highest standards of quality and craftsmanship.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Trusted by local jewellers throughout Etawah, we pride ourselves on delivering exceptional results with 
              attention to detail, fast turnaround times, and competitive pricing. Whether you need custom designs, 
              intricate patterns, or bulk orders, we have the expertise and equipment to bring your vision to life.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <item.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
