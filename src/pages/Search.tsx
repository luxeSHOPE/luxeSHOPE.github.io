import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search as SearchIcon, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    category: "Accessories",
  },
  {
    id: "7",
    name: "Wool Coat",
    price: 350,
    image: product1,
    category: "Outerwear",
  },
  {
    id: "8",
    name: "Cotton Blouse",
    price: 95,
    image: product2,
    category: "Tops",
  },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  const categories = ["all", ...Array.from(new Set(allProducts.map(p => p.category.toLowerCase())))];

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || 
                             product.category.toLowerCase() === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4">Search Products</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find exactly what you're looking for in our collection
            </p>
          </div>

          {/* Search Bar */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                    data-testid="input-search"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-40" data-testid="select-category">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40" data-testid="select-sort">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground" data-testid="text-results-count">
              {filteredProducts.length} {filteredProducts.length === 1 ? "result" : "results"} found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <SearchIcon className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or browse our categories
                </p>
                <Button onClick={() => {setSearchQuery(""); setSelectedCategory("all");}} data-testid="button-clear-search">
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;