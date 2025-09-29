import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ShoppingBag, User, Heart } from "lucide-react";

export function Header() {
  const [cartCount] = useState(3);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-serif font-bold tracking-tight">LUXE</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/shop" 
            className={`text-sm font-medium transition-smooth ${
              location.pathname === '/shop' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
            }`}
          >
            Shop
          </Link>
          <Link 
            to="/collections" 
            className={`text-sm font-medium transition-smooth ${
              location.pathname === '/collections' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
            }`}
          >
            Collections
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-smooth ${
              location.pathname === '/about' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-smooth ${
              location.pathname === '/contact' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Link to="/search">
            <Button variant="ghost" size="icon" className="hidden sm:flex" data-testid="button-search">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </Link>
          
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="hidden sm:flex" data-testid="button-wishlist">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Wishlist</span>
            </Button>
          </Link>

          <Link to="/account">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-4 w-4" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-4 w-4" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs bg-primary text-primary-foreground">
                  {cartCount}
                </Badge>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link to="/shop" className="text-lg font-medium">Shop</Link>
                <Link to="/collections" className="text-lg font-medium">Collections</Link>
                <Link to="/about" className="text-lg font-medium">About</Link>
                <Link to="/contact" className="text-lg font-medium">Contact</Link>
                <div className="border-t pt-4 mt-4">
                  <div className="flex flex-col space-y-3">
                    <Link to="/account" className="text-sm text-muted-foreground">Account</Link>
                    <Link to="/cart" className="text-sm text-muted-foreground">Cart</Link>
                    <Link to="/wishlist" className="text-sm text-muted-foreground">Wishlist</Link>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}