import { FeeBreakup } from '@/components/fees/fee-breakup';
import { InstallmentCalculator } from '@/components/fees/installment-calculator';

export default function FeesPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
       <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">Fee Details</h1>
      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
            <h2 className="font-headline text-2xl font-semibold mb-4">Fee Breakup</h2>
            <FeeBreakup />
        </div>
        <div className="md:col-span-3">
            <h2 className="font-headline text-2xl font-semibold mb-4">Installment Calculator</h2>
            <InstallmentCalculator />
        </div>
      </div>
    </div>
  );
}
