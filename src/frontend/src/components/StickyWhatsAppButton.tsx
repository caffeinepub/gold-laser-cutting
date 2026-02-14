import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function StickyWhatsAppButton() {
  return (
    <a
      href="https://wa.me/918126108743"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="lg"
        className="gold-gradient rounded-full h-16 w-16 shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse hover:animate-none"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card border border-border px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
