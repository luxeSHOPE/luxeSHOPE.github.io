import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import { Heart, ShoppingBag } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "1",
      name: "Essential Blazer",
      price: 189,
      originalPrice: 240,
      image: product1,
      category: "Outerwear",
      isNew: true,
      isSale: true,
    },
    {
      id: "2", 
      name: "Silk Midi Dress",
      price: 156,
      image: product2,
      category: "Dresses",
      isNew: true,
    },
    {
      id: "3",
      name: "Leather Handbag",
      price: 295,
      image: product3,
      category: "Accessories",
    },
  ]);

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(items => items.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4">My Wishlist</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Save your favorite items and shop them later
            </p>
          </div>

          {wishlistItems.length === 0 ? (
            <Card className="max-w-md mx-auto text-center py-16">
              <CardContent>
                <Heart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
                <p className="text-muted-foreground mb-6">
                  Start shopping to add items to your wishlist
                </p>
                <Button data-testid="button-shop-now">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold" data-testid="text-wishlist-count">
                  {wishlistItems.length} items
                </h2>
                <Button 
                  variant="outline"
                  onClick={() => setWishlistItems([])}
                  data-testid="button-clear-wishlist"
                >
                  Clear All
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wishlistItems.map((product) => (
                  <div key={product.id} className="group relative">
                    <ProductCard {...product} />
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeFromWishlist(product.id)}
                      data-testid={`button-remove-${product.id}`}
                    >
                      <Heart className="h-4 w-4 fill-current text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;