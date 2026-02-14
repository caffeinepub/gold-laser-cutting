import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'gold-laser-cutting'
  );

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/gold-laser-cutting-logo.dim_512x512.png"
                alt="Gold Laser Cutting"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold gold-text">Gold Laser Cutting</h3>
                <p className="text-sm text-muted-foreground">Premium Jewellery Cutting</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              5+ years of precision jewellery laser cutting experience in Etawah, Uttar Pradesh.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:7906968141"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                7906968141
              </a>
              <a
                href="https://wa.me/918126108743"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <SiWhatsapp className="h-4 w-4" />
                8126108743
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Etawah, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Services', 'Gallery', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Gold Laser Cutting. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <span className="text-red-500">♥</span> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
