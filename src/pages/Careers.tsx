
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users } from "lucide-react";

const jobOpenings = [
  {
    title: "Fashion Buyer",
    location: "New York, NY",
    type: "Full-time",
    description: "Join our buying team to curate the next season's collections.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    description: "Help us create beautiful and intuitive digital experiences.",
  },
  {
    title: "Customer Service Representative",
    location: "Los Angeles, CA",
    type: "Part-time",
    description: "Provide exceptional support to our valued customers.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be part of a passionate team that's shaping the future of fashion. Explore exciting career opportunities with LUXE.
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{job.title}</span>
                    <Button>Apply Now</Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                  </div>
                  <p>{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-serif font-bold mb-4">Don't see a perfect fit?</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button variant="outline">Send Resume</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
