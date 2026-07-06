import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much subsidy can I get under PM Surya Ghar Yojana?",
    answer:
      "Under PM Surya Ghar Muft Bijli Yojana, eligible homeowners can receive government subsidy benefits up to ₹78,000 for rooftop solar installation. The subsidy amount depends on the installed solar capacity and current government guidelines.",
  },
  {
    question: "What is the cost of installing solar panels for my home?",
    answer:
      "The cost of a rooftop solar system depends on your electricity consumption, required system capacity (kW), solar panel brand, inverter type, and installation requirements. PGL Renewables provides a customized quotation after analyzing your electricity bill and rooftop conditions.",
  },
  {
    question: "How much electricity can a 3kW solar system generate?",
    answer:
      "A 3kW rooftop solar system can generate approximately 350–500 units per month depending on sunlight availability, location, weather conditions, and installation quality.",
  },
  {
    question: "Who is eligible for PM Surya Ghar solar subsidy?",
    answer:
      "Residential homeowners with a valid electricity connection can apply for PM Surya Ghar Yojana as per government eligibility criteria. The solar system must follow approved guidelines to receive subsidy benefits.",
  },
  {
    question: "How many years will solar panels last?",
    answer:
      "High-quality solar panels can last 25–30 years with proper installation and maintenance. PGL Renewables provides professional installation and after-sales support to ensure long-term solar performance.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background scroll-mt-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-xl">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about solar installation, subsidy, costs, and system performance.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
