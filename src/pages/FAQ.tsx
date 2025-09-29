
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Overnight shipping takes 1 business day. Free shipping is available on orders over $75."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return window for all items in original condition with tags attached. Returns are free with our prepaid return labels. Final sale items cannot be returned."
  },
  {
    question: "How do I find my size?",
    answer: "Please refer to our Size Guide page for detailed measurements. If you're between sizes, we recommend sizing up. Our customer service team is also available to help with sizing questions."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship within the United States and Canada. International shipping to select countries is coming soon. Please contact us for specific shipping inquiries."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our encrypted payment system."
  },
  {
    question: "Can I cancel or modify my order?",
    answer: "Orders can be cancelled or modified within 1 hour of placement. After that, orders enter our fulfillment process and cannot be changed. Please contact customer service immediately if you need to make changes."
  },
  {
    question: "Do you offer gift cards?",
    answer: "Yes! Gift cards are available in denominations from $25 to $500. They can be purchased online and are delivered via email. Gift cards never expire and can be used for any purchase on our website."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          <div className="text-center mb-12">
            <HelpCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about ordering, shipping, returns, and more.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Common Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <Card className="mt-8 shadow-elegant bg-gradient-accent">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2 text-accent-foreground">
                  Still have questions?
                </h3>
                <p className="text-accent-foreground/80 mb-4">
                  Our customer service team is here to help you with any questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <span className="text-sm text-accent-foreground/80">
                    Email: support@luxefashion.com
                  </span>
                  <span className="text-sm text-accent-foreground/80">
                    Phone: +1 (555) 123-4567
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
