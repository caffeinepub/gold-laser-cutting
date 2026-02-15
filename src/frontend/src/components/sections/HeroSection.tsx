import { useEffect, useRef } from 'react';
import { Phone, MessageCircle, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg-luxury.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/assets/generated/gold-laser-cutting-logo.dim_512x512.png"
              alt="Gold Laser Cutting"
              className="h-24 w-24 object-contain animate-in fade-in zoom-in duration-700"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            Best <span className="gold-text">Gold Laser Cutting</span> Service in Etawah
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-balance">
            5+ Years of Precision Jewellery Laser Cutting Experience
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl font-semibold gold-text mb-12 text-balance">
            Your Trust, our Quality Work
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="gold-gradient text-base font-semibold px-8 hover:scale-105 transition-transform duration-200"
            >
              <a href="tel:7906968141" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base font-semibold px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-200"
            >
              <a
                href="https://wa.me/918126108743"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
            </Button>

            <Button
              onClick={scrollToContact}
              size="lg"
              variant="secondary"
              className="text-base font-semibold px-8 hover:scale-105 transition-transform duration-200"
            >
              Get Quote
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
