'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Calculator } from 'lucide-react';
import { feeDetails } from '@/lib/data';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount).replace('₹', '₹ ');
};

const formSchema = z.object({
  amount: z.number().min(1000, 'Amount must be at least ₹1,000'),
  installments: z.number().min(2, 'At least 2 installments').max(12, 'Maximum 12 installments'),
});

export function InstallmentCalculator() {
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: feeDetails.pending,
      installments: 3,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const monthly = values.amount / values.installments;
    setMonthlyPayment(monthly);
  };
  
  const installmentsValue = form.watch('installments');

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">EMI Calculator</CardTitle>
        <CardDescription>Plan your fee payments in easy monthly installments.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="amount"
              render={({ field: { onChange, ...rest } }) => (
                <FormItem>
                  <FormLabel>Fee Amount (₹)</FormLabel>
                  <FormControl>
                    <Input type="number" onChange={e => onChange(parseInt(e.target.value, 10))} {...rest}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="installments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Installments: {installmentsValue}</FormLabel>
                  <FormControl>
                    <Slider
                      min={2}
                      max={12}
                      step={1}
                      value={[field.value]}
                      onValueChange={(value) => field.onChange(value[0])}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate
            </Button>
          </form>
        </Form>
        {monthlyPayment !== null && (
          <div className="mt-6 rounded-lg border bg-muted p-6 text-center">
            <p className="text-sm text-muted-foreground">Your Monthly Installment</p>
            <p className="font-headline text-4xl font-bold text-primary">{formatCurrency(monthlyPayment)}</p>
            <p className="text-xs text-muted-foreground">
              for {form.getValues('installments')} months
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
