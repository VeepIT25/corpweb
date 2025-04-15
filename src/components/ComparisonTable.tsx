
import { Award, Car, CheckCircle2, Clock4, DollarSign, Heart, Users2 } from "lucide-react";
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
    <section id="why-veep" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-center text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Why Choose VEEP?
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-600">
          Discover how our premium services set us apart in the industry
        </p>

        <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px] bg-gray-50 text-lg font-semibold">Features</TableHead>
                <TableHead className="bg-gradient-orange text-lg font-semibold text-white">VEEP Advantages</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="flex items-center gap-3 font-medium">
                  <Car className="h-5 w-5 text-veep-orange" />
                  Fleet Variety
                </TableCell>
                <TableCell className="font-medium">New premium 6-seaters and high-demand vehicles</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-3 font-medium">
                  <DollarSign className="h-5 w-5 text-veep-orange" />
                  Earnings Potential
                </TableCell>
                <TableCell className="font-medium">Maximised earnings via multiple revenue streams</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-3 font-medium">
                  <Heart className="h-5 w-5 text-veep-orange" />
                  Driver welfare & benefits
                </TableCell>
                <TableCell className="font-medium">Ever growing suite of benefits</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-3 font-medium">
                  <Award className="h-5 w-5 text-veep-orange" />
                  Vehicle Condition
                </TableCell>
                <TableCell className="font-medium">New vehicles with full warranty coverage</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-3 font-medium">
                  <Clock4 className="h-5 w-5 text-veep-orange" />
                  Support System
                </TableCell>
                <TableCell className="font-medium">Comprehensive 24/7 driver support</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-veep-orange" />
                  Dual Usage
                </TableCell>
                <TableCell>
                  <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="flex items-center gap-3 font-medium">
                  <Users2 className="h-5 w-5 text-veep-orange" />
                  Family Friendly
                </TableCell>
                <TableCell>
                  <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
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

