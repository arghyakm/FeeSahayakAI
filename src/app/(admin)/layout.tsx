'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { AppSidebar } from '@/components/layout/sidebar';
import { AppHeader } from '@/components/layout/header';
import { Loader2, ShieldAlert } from 'lucide-react';

const ADMIN_EMAIL = 'admin@feesahayak.ai'; 

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (user.email !== ADMIN_EMAIL) {
    return (
        <div className="flex h-screen w-full flex-col bg-muted/40">
            <AppSidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <AppHeader />
                <main className="flex-1 p-4 sm:px-6 sm:py-0 flex items-center justify-center">
                    <div className="text-center">
                        <ShieldAlert className="mx-auto h-16 w-16 text-destructive mb-4" />
                        <h1 className="font-headline text-3xl text-destructive">Access Denied</h1>
                        <p className="text-muted-foreground mt-2">You do not have permission to view this page.</p>
                        <Button onClick={() => router.push('/dashboard')} className="mt-6">Go to Dashboard</Button>
                    </div>
                </main>
            </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <AppSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <AppHeader />
        <main className="flex-1 p-4 sm:px-6 sm:py-0">{children}</main>
      </div>
    </div>
  );
}
