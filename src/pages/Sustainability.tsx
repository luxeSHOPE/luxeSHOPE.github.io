
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Heart, Globe } from "lucide-react";

const initiatives = [
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "We prioritize organic, recycled, and sustainably sourced materials in our collections.",
  },
  {
    icon: Recycle,
    title: "Circular Fashion",
    description: "Our take-back program ensures old garments are recycled or upcycled responsibly.",
  },
  {
    icon: Heart,
    title: "Ethical Production",
    description: "Fair wages and safe working conditions for all workers in our supply chain.",
  },
  {
    icon: Globe,
    title: "Carbon Neutral",
    description: "Committed to carbon neutrality through renewable energy and offset programs.",
  },
];

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Sustainability
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fashion with a conscience. Our commitment to creating beautiful pieces while protecting our planet and supporting communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary rounded-lg p-3">
                      <initiative.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{initiative.title}</h3>
                      <p className="text-muted-foreground">{initiative.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-accent rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-accent-foreground">
              Our 2030 Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-accent-foreground mb-2">100%</div>
                <p className="text-accent-foreground/80">Sustainable Materials</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-foreground mb-2">50%</div>
                <p className="text-accent-foreground/80">Waste Reduction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-foreground mb-2">0</div>
                <p className="text-accent-foreground/80">Carbon Emissions</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sustainability;
