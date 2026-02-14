import { useRef } from 'react';
import { Sparkles, Scissors, Palette, Type, Grid3x3, Gem, Package } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef);

  const services = [
    {
      icon: Sparkles,
      title: 'Gold Jewellery Laser Cutting',
      description: 'Precision cutting for all types of gold jewellery with flawless finishing',
    },
    {
      icon: Scissors,
      title: 'All Types of Jewellery Cutting',
      description: 'Expert laser cutting services for any jewellery material and design',
    },
    {
      icon: Palette,
      title: 'Custom Design Cutting',
      description: 'Bring your unique designs to life with our custom cutting services',
    },
    {
      icon: Type,
      title: 'Name Cutting',
      description: 'Personalized name cutting for pendants, bracelets, and more',
    },
    {
      icon: Grid3x3,
      title: 'Pattern Cutting',
      description: 'Intricate pattern work with exceptional detail and accuracy',
    },
    {
      icon: Gem,
      title: 'Fine Detail Work',
      description: 'Microscopic precision for the most delicate jewellery pieces',
    },
    {
      icon: Package,
      title: 'Bulk Order Accepted',
      description: 'Large volume orders handled efficiently with consistent quality',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gold-text">Services</span>
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive laser cutting solutions for all your jewellery needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
