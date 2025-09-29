import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const allProducts = [
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
  {
    id: "7",
    name: "Wool Coat",
    price: 395,
    image: product1,
    category: "Outerwear",
  },
  {
    id: "8",
    name: "Satin Blouse",
    price: 125,
    image: product2,
    category: "Tops",
  },
];

const categories = ["All", "Outerwear", "Dresses", "Accessories", "Knitwear", "Bottoms", "Jewelry", "Tops"];

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Shop All</h1>
            <p className="text-muted-foreground max-w-2xl">
              Discover our complete collection of premium fashion pieces, carefully curated for the modern wardrobe.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select defaultValue="newest">
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2 flex-wrap">
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                New Arrivals
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                Sale
              </Badge>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;