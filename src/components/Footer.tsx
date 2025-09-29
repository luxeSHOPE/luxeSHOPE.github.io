import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">LUXE</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Curating premium fashion pieces for the modern wardrobe. 
              Discover timeless style with contemporary design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Shop</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/new-arrivals" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                New Arrivals
              </Link>
              <Link to="/women" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Women
              </Link>
              <Link to="/men" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Men
              </Link>
              <Link to="/accessories" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Accessories
              </Link>
              <Link to="/sale" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Sale
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                About Us
              </Link>
              <Link to="/careers" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Careers
              </Link>
              <Link to="/press" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Press
              </Link>
              <Link to="/sustainability" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Sustainability
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Contact Us
              </Link>
              <Link to="/size-guide" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Size Guide
              </Link>
              <Link to="/shipping-returns" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Shipping & Returns
              </Link>
              <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                FAQ
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 LUXE Fashion. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}