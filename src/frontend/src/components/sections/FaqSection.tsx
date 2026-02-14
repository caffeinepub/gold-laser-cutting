import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef);

  const faqs = [
    {
      question: 'How much time does cutting take?',
      answer:
        'The time required depends on the complexity and size of the design. Simple cuts can be completed within a few hours, while intricate custom designs may take 1-2 days. For bulk orders, we provide a detailed timeline upfront. We prioritize fast delivery without compromising on quality.',
    },
    {
      question: 'Do you accept custom designs?',
      answer:
        'Yes, absolutely! We specialize in custom design cutting and can bring any design to life. Whether you have a sketch, digital file, or just an idea, our team will work with you to create the perfect piece. Our advanced laser machines can handle even the most intricate and detailed custom work.',
    },
    {
      question: 'What is the starting price?',
      answer:
        'Our pricing is competitive and depends on factors such as design complexity, material, and size. We offer affordable rates for both individual pieces and bulk orders. Please contact us at 7906968141 or WhatsApp 8126108743 for a detailed quote based on your specific requirements.',
    },
    {
      question: 'Do you take bulk orders?',
      answer:
        'Yes, we welcome bulk orders! We have the capacity and advanced equipment to handle large volume orders efficiently while maintaining consistent quality across all pieces. Bulk orders often qualify for special pricing. Contact us to discuss your requirements and get a customized quote.',
    },
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
