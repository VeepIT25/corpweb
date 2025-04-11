
import { Check, X } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const ComparisonTable = () => {
  return (
    <section id="why-veep" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Why Choose VEEP?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          See how VEEP compares to traditional rental services in Singapore.
        </p>

        <div className="overflow-x-auto rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px] bg-gray-100">Features</TableHead>
                <TableHead className="bg-gray-100">Traditional Rentals</TableHead>
                <TableHead className="bg-veep-orange text-white">VEEP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Fleet Variety</TableCell>
                <TableCell>Mostly used and standard 4-seaters</TableCell>
                <TableCell className="font-medium">New premium 6-seaters and high-demand vehicles</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Earnings Potential</TableCell>
                <TableCell>Limited earnings from a single revenue stream</TableCell>
                <TableCell className="font-medium">Maximised earnings via multiple revenue streams</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Workshop Coverage</TableCell>
                <TableCell>Limited workshop access with longer downtime</TableCell>
                <TableCell className="font-medium">Extensive Islandwide network of workshops with minimal downtime</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Driver welfare & benefits</TableCell>
                <TableCell>Minimal driver benefits</TableCell>
                <TableCell className="font-medium">Ever growing suite of benefits</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Vehicle Condition</TableCell>
                <TableCell>Often older models with wear and tear</TableCell>
                <TableCell className="font-medium">New vehicles with full warranty coverage</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Support System</TableCell>
                <TableCell>Basic support during business hours</TableCell>
                <TableCell className="font-medium">Comprehensive 24/7 driver support</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Dual Usage</TableCell>
                <TableCell>
                  <X className="h-5 w-5 text-red-500" />
                </TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Family Friendly</TableCell>
                <TableCell>
                  <X className="h-5 w-5 text-red-500" />
                </TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-500" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
