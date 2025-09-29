import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about our latest collections and exclusive offers.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-accent">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-accent-foreground">
            Stay in Style
          </h2>
          <p className="text-accent-foreground/80 mb-8 leading-relaxed">
            Subscribe to our newsletter and be the first to know about new arrivals, 
            exclusive offers, and fashion insights from LUXE.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/80 backdrop-blur-sm border-0 focus:bg-background"
              required
            />
            <Button type="submit" variant="default" className="shrink-0">
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-accent-foreground/60 mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
}