import type { FeeDetails, Payment, Announcement } from '@/types';

export const feeDetails: FeeDetails = {
  total: 150000,
  paid: 75000,
  pending: 75000,
  nextDueDate: '2024-08-15',
  breakup: {
    tuition: 120000,
    library: 5000,
    lab: 10000,
    other: 15000,
  },
};

export const paymentHistory: Payment[] = [
  { id: 'pay_1', date: '2024-02-10', amount: 25000, method: 'Credit Card', status: 'Completed', receipt: '#' },
  { id: 'pay_2', date: '2023-11-05', amount: 25000, method: 'Net Banking', status: 'Completed', receipt: '#' },
  { id: 'pay_3', date: '2023-08-01', amount: 25000, method: 'UPI', status: 'Completed', receipt: '#' },
  { id: 'pay_4', date: '2023-05-15', amount: 25000, method: 'Credit Card', status: 'Completed', receipt: '#' },
  { id: 'pay_5', date: '2023-02-12', amount: 25000, method: 'Net Banking', status: 'Completed', receipt: '#' },
];

export const paymentTrends = [
    { month: 'Feb \'23', paid: 25000 },
    { month: 'May \'23', paid: 25000 },
    { month: 'Aug \'23', paid: 25000 },
    { month: 'Nov \'23', paid: 25000 },
    { month: 'Feb \'24', paid: 25000 },
    { month: 'May \'24', paid: 0 },
    { month: 'Aug \'24', paid: 0 },
];


let announcements: Announcement[] = [
  {
    id: 'ann_1',
    title: 'Important: Fee Payment Deadline Extended',
    content: 'The deadline for the current semester fee payment has been extended to August 30, 2024. Please ensure all dues are cleared by this date to avoid late fees.',
    date: '2024-07-20',
  },
  {
    id: 'ann_2',
    title: 'Scholarship Application Window Now Open',
    content: 'Applications for merit-based scholarships for the academic year 2024-2025 are now open. Interested students can apply through the student portal before September 15, 2024.',
    date: '2024-07-15',
  },
];

export const getAnnouncements = () => announcements;

export const addAnnouncement = (announcement: Omit<Announcement, 'id' | 'date'>) => {
    const newAnnouncement: Announcement = {
        ...announcement,
        id: `ann_${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
    };
    announcements = [newAnnouncement, ...announcements];
    return newAnnouncement;
}
