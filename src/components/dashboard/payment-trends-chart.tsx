'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from 'recharts';
import {
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { paymentTrends } from '@/lib/data';

const chartConfig = {
    paid: {
      label: 'Paid',
      color: 'hsl(var(--primary))',
    },
  };

  const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value).replace('T', 'K');

export function PaymentTrendsChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[250px] w-full">
        <ResponsiveContainer>
      <LineChart
        data={paymentTrends}
        margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
          />
        <YAxis 
            tickFormatter={(value) => formatCurrency(Number(value))}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
        />
        <Tooltip cursor={false} content={<ChartTooltipContent indicator="line" formatter={(value) => formatCurrency(Number(value))}/>} />
        <Line
          dataKey="paid"
          type="monotone"
          stroke="hsl(var(--primary))"
          strokeWidth={3}
          dot={true}
          activeDot={{r: 8}}
        />
      </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
