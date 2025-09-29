import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container flex min-h-[600px] lg:min-h-[700px] items-center">
        <div className="grid w-full gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Content */}
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl font-serif font-bold tracking-tight text-primary-foreground lg:text-6xl">
                Redefine Your
                <span className="block text-fashion-gold">Style</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-md leading-relaxed">
                Discover our curated collection of premium fashion pieces that blend contemporary design with timeless elegance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button variant="hero" size="lg" className="group">
                  Shop Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/collections">
                <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  View Lookbook
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-hover">
              <img
                src={heroImage}
                alt="Fashion model wearing contemporary clothing"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-fashion-gold text-fashion-gold-foreground px-6 py-3 rounded-lg shadow-product animate-slide-up font-semibold">
              New Arrivals
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
}