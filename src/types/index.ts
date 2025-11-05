import type { User as FirebaseUser } from 'firebase/auth';

export type User = FirebaseUser;

export interface Payment {
  id: string;
  date: string;
  amount: number;
  method: string;
  status: 'Completed' | 'Pending' | 'Failed';
  receipt: string;
}

export interface FeeDetails {
  total: number;
  paid: number;
  pending: number;
  nextDueDate: string;
  breakup: {
    tuition: number;
    library: number;
    lab: number;
    other: number;
  };
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}
