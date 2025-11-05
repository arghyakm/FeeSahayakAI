import { RazorpayForm } from "@/components/payments/razorpay-form";
import { feeDetails } from "@/lib/data";

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
};

export default function PaymentsPage() {
    return (
        <div className="container mx-auto p-4 md:p-8 flex items-center justify-center">
            <div className="w-full max-w-lg">
                <h1 className="font-headline text-3xl md:text-4xl font-bold mb-2 text-center">Make a Payment</h1>
                <p className="text-center text-muted-foreground mb-8">
                    Your pending amount is <span className="font-bold text-primary">{formatCurrency(feeDetails.pending)}</span>.
                </p>
                <RazorpayForm />
            </div>
        </div>
    );
}
