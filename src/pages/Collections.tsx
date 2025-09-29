import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const collections = [
  {
    id: "1",
    name: "Spring Essentials",
    description: "Fresh and contemporary pieces perfect for the new season",
    image: product1,
    itemCount: 24,
  },
  {
    id: "2",
    name: "Work Wardrobe",
    description: "Professional pieces that transition seamlessly from office to evening",
    image: product2,
    itemCount: 18,
  },
  {
    id: "3",
    name: "Weekend Luxe",
    description: "Elevated casual wear for your off-duty moments",
    image: product3,
    itemCount: 32,
  },
];

const Collections = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Our Collections
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore carefully curated collections that capture the essence of contemporary fashion. 
              Each collection tells a story of modern elegance and timeless style.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {collections.map((collection, index) => (
              <div 
                key={collection.id}
                className={`group relative overflow-hidden rounded-2xl shadow-product hover:shadow-hover transition-all duration-500 animate-fade-in ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`relative ${index === 0 ? 'aspect-[2/1]' : 'aspect-[4/5]'} overflow-hidden`}>
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-white">
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-white/90 mb-4 max-w-md">
                        {collection.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/80">
                          {collection.itemCount} pieces
                        </span>
                        <Button 
                          variant="secondary" 
                          className="group bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30"
                        >
                          View Collection
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Collection */}
          <div className="bg-gradient-accent rounded-2xl p-8 lg:p-12 text-center animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-accent-foreground">
              Limited Edition
            </h2>
            <p className="text-accent-foreground/80 mb-6 max-w-2xl mx-auto">
              Discover our exclusive limited edition pieces, available for a short time only. 
              Each item is carefully crafted with premium materials and attention to detail.
            </p>
            <Button variant="default" size="lg">
              Explore Limited Edition
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;