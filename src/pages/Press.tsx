
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Download, ExternalLink } from "lucide-react";

const pressReleases = [
  {
    title: "LUXE Announces Sustainable Fashion Initiative",
    date: "March 15, 2024",
    summary: "New commitment to eco-friendly practices and ethical sourcing across all collections.",
  },
  {
    title: "LUXE Opens New Flagship Store in Beverly Hills",
    date: "February 8, 2024",
    summary: "Expansion continues with premium location offering personalized shopping experiences.",
  },
  {
    title: "LUXE Partners with Emerging Designers Program",
    date: "January 20, 2024",
    summary: "Supporting next generation of fashion talent through mentorship and retail partnerships.",
  },
];

const Press = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Press Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latest news, press releases, and media resources from LUXE Fashion.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold mb-6">Latest Press Releases</h2>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <Card key={index} className="shadow-elegant">
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between">
                        <span className="text-lg">{release.title}</span>
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {release.date}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{release.summary}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Media Kit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Download our media kit for brand assets, logos, and product images.
                  </p>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Media Kit
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Press Contacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium">Media Inquiries</p>
                    <p className="text-sm text-muted-foreground">press@luxefashion.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Partnership Opportunities</p>
                    <p className="text-sm text-muted-foreground">partnerships@luxefashion.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
