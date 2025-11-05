import { feeDetails } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};

export function FeeBreakup() {
  const { breakup, total } = feeDetails;
  const breakupItems = [
    { label: 'Tuition Fee', amount: breakup.tuition },
    { label: 'Library Fee', amount: breakup.library },
    { label: 'Lab Fee', amount: breakup.lab },
    { label: 'Other Charges', amount: breakup.other },
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">Semester Fee Structure</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-sm">
          {breakupItems.map((item) => (
            <div key={item.label} className="flex justify-between">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium">{formatCurrency(item.amount)}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start p-6 pt-4">
        <Separator className="my-4" />
        <div className="flex w-full justify-between font-bold text-lg">
          <span>Total Fee</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
