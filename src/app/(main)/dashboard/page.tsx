import { StatsCards } from '@/components/dashboard/stats-cards';
import { PaymentHistory } from '@/components/dashboard/payment-history';
import { PaymentTrendsChart } from '@/components/dashboard/payment-trends-chart';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <div className="grid flex-1 items-start gap-4 md:gap-8">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <StatsCards />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle className="font-headline">Payment Trends</CardTitle>
              <CardDescription>
                An overview of your fee payments over time.
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <PaymentTrendsChart />
            </CardContent>
          </Card>
          <div className="col-span-4 lg:col-span-3">
             <PaymentHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
