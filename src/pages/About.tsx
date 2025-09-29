import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Fashion",
    description: "We believe fashion is a form of self-expression that should be accessible to everyone.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Committed to ethical sourcing and sustainable production methods that respect our planet.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a community of fashion lovers who inspire and support each other.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Every piece is carefully selected for its exceptional quality and timeless design.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                  About LUXE
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Founded on the belief that fashion should be both beautiful and meaningful, 
                  LUXE curates contemporary pieces that celebrate individual style while 
                  honoring craftsmanship and sustainability.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Since our inception, we've been dedicated to bringing you carefully selected 
                  fashion pieces that stand the test of time. Our team travels the world to 
                  discover emerging designers and established brands that share our commitment 
                  to quality and ethical practices.
                </p>
                <Button variant="hero" size="lg">
                  Our Story
                </Button>
              </div>
              
              <div className="animate-scale-in">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-hover">
                  <img
                    src={heroImage}
                    alt="LUXE fashion philosophy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do, from product selection 
                to customer service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="text-center border-0 shadow-elegant hover:shadow-hover transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Passionate individuals who bring diverse perspectives and expertise 
                to create exceptional fashion experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="aspect-square bg-muted rounded-2xl mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-1">Team Member {i}</h3>
                  <p className="text-muted-foreground">Fashion Expert</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Join Our Fashion Journey
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Be part of a community that celebrates individual style and conscious fashion choices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Shop Collection
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Newsletter
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;