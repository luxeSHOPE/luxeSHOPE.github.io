
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";

const menProducts = [
  {
    id: "1",
    name: "Classic Suit",
    price: 295,
    image: product1,
    category: "Suits",
  },
  {
    id: "2",
    name: "Casual Blazer",
    price: 189,
    image: product1,
    category: "Outerwear",
  },
];

const Men = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Men's Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sophisticated and timeless pieces for the modern gentleman.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menProducts.map((product, index) => (
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

export default Men;
