
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import product3 from "@/assets/product-3.jpg";

const accessoryProducts = [
  {
    id: "1",
    name: "Leather Handbag",
    price: 295,
    image: product3,
    category: "Bags",
  },
  {
    id: "2",
    name: "Statement Earrings",
    price: 85,
    image: product3,
    category: "Jewelry",
    isNew: true,
  },
];

const Accessories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Accessories
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete your look with our carefully selected accessories collection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {accessoryProducts.map((product, index) => (
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

export default Accessories;
