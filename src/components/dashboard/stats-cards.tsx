import { feeDetails } from '@/lib/data';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IndianRupee, CalendarClock } from 'lucide-react';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export function StatsCards() {
  const { total, paid, pending, nextDueDate } = feeDetails;
  const formattedDueDate = new Date(nextDueDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const stats = [
    { title: 'Total Fees', value: formatCurrency(total), color: 'text-blue-500' },
    { title: 'Amount Paid', value: formatCurrency(paid), color: 'text-green-500' },
    { title: 'Pending Amount', value: formatCurrency(pending), color: 'text-red-500' },
    { title: 'Next Due Date', value: formattedDueDate, color: 'text-orange-500' },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {index < 3 ? 
                <IndianRupee className={`h-4 w-4 text-muted-foreground ${stat.color}`} /> : 
                <CalendarClock className={`h-4 w-4 text-muted-foreground ${stat.color}`} />
            }
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {index === 1 && `of ${formatCurrency(total)}`}
              {index === 2 && `out of ${formatCurrency(total)}`}
              {index === 3 && 'is your next deadline'}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
