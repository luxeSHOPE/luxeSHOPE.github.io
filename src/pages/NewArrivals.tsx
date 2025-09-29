
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const newProducts = [
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
    name: "Statement Earrings",
    price: 85,
    image: product3,
    category: "Jewelry",
    isNew: true,
  },
];

const NewArrivals = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              New Arrivals
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our latest collection of contemporary fashion pieces, carefully curated for the modern wardrobe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewArrivals;
