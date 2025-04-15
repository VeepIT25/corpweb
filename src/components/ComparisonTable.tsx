
import { Check } from "lucide-react";
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
    <section id="why-veep" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">
          Why Choose VEEP?
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600">
          Discover the unique advantages of partnering with VEEP.
        </p>

        <div className="overflow-x-auto rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px] bg-gray-100">Features</TableHead>
                <TableHead className="bg-veep-orange text-white">VEEP Advantages</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Fleet Variety</TableCell>
                <TableCell className="font-medium">New premium 6-seaters and high-demand vehicles</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Earnings Potential</TableCell>
                <TableCell className="font-medium">Maximised earnings via multiple revenue streams</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Driver welfare & benefits</TableCell>
                <TableCell className="font-medium">Ever growing suite of benefits</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Vehicle Condition</TableCell>
                <TableCell className="font-medium">New vehicles with full warranty coverage</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Support System</TableCell>
                <TableCell className="font-medium">Comprehensive 24/7 driver support</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Dual Usage</TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-500" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Family Friendly</TableCell>
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
