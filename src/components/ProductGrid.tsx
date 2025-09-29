import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
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
  {
    id: "4",
    name: "Cashmere Sweater",
    price: 220,
    image: product1,
    category: "Knitwear",
  },
  {
    id: "5",
    name: "Wide-Leg Trousers", 
    price: 138,
    originalPrice: 175,
    image: product2,
    category: "Bottoms",
    isSale: true,
  },
  {
    id: "6",
    name: "Statement Earrings",
    price: 85,
    image: product3,
    category: "Jewelry",
    isNew: true,
  },
];

export function ProductGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium fashion pieces, 
            each designed to elevate your personal style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="outline" size="lg" className="animate-fade-in">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}