
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Ruler } from "lucide-react";

const womenSizes = [
  { size: "XS", bust: "32-34", waist: "24-26", hips: "34-36" },
  { size: "S", bust: "34-36", waist: "26-28", hips: "36-38" },
  { size: "M", bust: "36-38", waist: "28-30", hips: "38-40" },
  { size: "L", bust: "38-40", waist: "30-32", hips: "40-42" },
  { size: "XL", bust: "40-42", waist: "32-34", hips: "42-44" },
];

const menSizes = [
  { size: "S", chest: "34-36", waist: "28-30", neck: "14-14.5" },
  { size: "M", chest: "38-40", waist: "32-34", neck: "15-15.5" },
  { size: "L", chest: "42-44", waist: "36-38", neck: "16-16.5" },
  { size: "XL", chest: "46-48", waist: "40-42", neck: "17-17.5" },
  { size: "XXL", chest: "50-52", waist: "44-46", neck: "18-18.5" },
];

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          <div className="text-center mb-12">
            <Ruler className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Size Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your perfect fit with our comprehensive size guide. All measurements are in inches.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Women's Sizing</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Size</TableHead>
                      <TableHead>Bust</TableHead>
                      <TableHead>Waist</TableHead>
                      <TableHead>Hips</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {womenSizes.map((size) => (
                      <TableRow key={size.size}>
                        <TableCell className="font-medium">{size.size}</TableCell>
                        <TableCell>{size.bust}</TableCell>
                        <TableCell>{size.waist}</TableCell>
                        <TableCell>{size.hips}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Men's Sizing</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Size</TableHead>
                      <TableHead>Chest</TableHead>
                      <TableHead>Waist</TableHead>
                      <TableHead>Neck</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {menSizes.map((size) => (
                      <TableRow key={size.size}>
                        <TableCell className="font-medium">{size.size}</TableCell>
                        <TableCell>{size.chest}</TableCell>
                        <TableCell>{size.waist}</TableCell>
                        <TableCell>{size.neck}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 shadow-elegant">
            <CardHeader>
              <CardTitle>How to Measure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Bust/Chest</h4>
                <p className="text-muted-foreground">Measure around the fullest part of your bust/chest, keeping the tape level.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Waist</h4>
                <p className="text-muted-foreground">Measure around your natural waistline, above your hip bones.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hips</h4>
                <p className="text-muted-foreground">Measure around the fullest part of your hips.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Neck</h4>
                <p className="text-muted-foreground">Measure around the base of your neck where a collar would sit.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SizeGuide;
