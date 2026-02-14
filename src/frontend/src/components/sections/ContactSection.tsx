import { useRef, useState } from 'react';
import { MapPin, Phone, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I would like to get a quote.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918126108743?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show confirmation
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gold-text">Touch</span>
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us for a quote or visit our location in Etawah
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Map */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-muted-foreground">Etawah, Uttar Pradesh, India</p>
                </div>
              </div>

              <a
                href="tel:7906968141"
                className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
              >
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    7906968141
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/918126108743"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors group"
              >
                <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">WhatsApp</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    8126108743
                  </p>
                </div>
              </a>
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden border border-border h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113771.88888888888!2d79.0!3d26.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07184d7d8c5e7%3A0x8e3f8f8f8f8f8f8f!2sEtawah%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gold Laser Cutting Location - Etawah, Uttar Pradesh"
              ></iframe>
            </div>
          </div>

          {/* Quote Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-6">Get a Quote</h3>
              
              {isSubmitted ? (
                <div className="p-6 bg-primary/10 border border-primary rounded-lg text-center">
                  <p className="text-primary font-semibold mb-2">Thank you!</p>
                  <p className="text-muted-foreground">
                    Your quote request has been sent via WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gold-gradient text-base font-semibold"
                    size="lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Quote Request
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Your request will be sent via WhatsApp for quick response
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
