
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, RotateCcw, Clock, Shield } from "lucide-react";

const shippingOptions = [
  {
    name: "Standard Shipping",
    time: "5-7 business days",
    cost: "Free on orders over $75",
  },
  {
    name: "Express Shipping",
    time: "2-3 business days",
    cost: "$15",
  },
  {
    name: "Overnight Shipping",
    time: "1 business day",
    cost: "$25",
  },
];

const ShippingReturns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Shipping & Returns
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about shipping, returns, and exchanges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {shippingOptions.map((option, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium">{option.name}</p>
                      <p className="text-sm text-muted-foreground">{option.time}</p>
                    </div>
                    <p className="font-medium">{option.cost}</p>
                  </div>
                ))}
                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm">
                    <strong>Note:</strong> Shipping times exclude weekends and holidays. Orders placed after 2 PM EST will be processed the next business day.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Returns & Exchanges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">30-Day Return Window</p>
                      <p className="text-sm text-muted-foreground">Return items within 30 days of delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Free Returns</p>
                      <p className="text-sm text-muted-foreground">We provide prepaid return labels</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm">
                    Items must be in original condition with tags attached. Final sale items cannot be returned.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Return Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Initiate Return</h3>
                  <p className="text-sm text-muted-foreground">Contact our customer service or use your account to start a return</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Pack & Ship</h3>
                  <p className="text-sm text-muted-foreground">Use our prepaid label to send items back in original packaging</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Get Refund</h3>
                  <p className="text-sm text-muted-foreground">Receive your refund within 5-7 business days after we receive your return</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingReturns;
