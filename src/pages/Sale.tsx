
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const saleProducts = [
  {
    id: "1",
    name: "Essential Blazer",
    price: 189,
    originalPrice: 240,
    image: product1,
    category: "Outerwear",
    isSale: true,
  },
  {
    id: "2",
    name: "Wide-Leg Trousers", 
    price: 138,
    originalPrice: 175,
    image: product2,
    category: "Bottoms",
    isSale: true,
  },
];

const Sale = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Badge variant="destructive" className="text-lg px-4 py-2">
                SALE
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Sale Items
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing deals on premium fashion pieces. Limited time offers on selected items.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {saleProducts.map((product, index) => (
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

export default Sale;
