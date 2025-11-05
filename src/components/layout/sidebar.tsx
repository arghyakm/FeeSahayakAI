'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Wallet,
  Receipt,
  MessageSquare,
  Megaphone,
  BookOpen,
  UserCog,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/fees', icon: Receipt, label: 'Fees' },
  { href: '/payments', icon: Wallet, label: 'Payments' },
  { href: '/chat', icon: MessageSquare, label: 'Chatbot' },
  { href: '/announcements', icon: Megaphone, label: 'Announcements' },
];

const adminNavItems = [
    { href: '/admin', icon: UserCog, label: 'Admin' },
];

export function AppSidebar() {
  const pathname = usePathname();
  const logo = PlaceHolderImages.find((img) => img.id === 'app-logo');

  const renderNavItem = (item: { href: string, icon: React.ElementType, label: string }) => {
    const Icon = item.icon;
    const isActive = pathname === item.href;
    return (
      <Tooltip key={item.href}>
        <TooltipTrigger asChild>
          <Link
            href={item.href}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8',
              isActive
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">{item.label}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{item.label}</TooltipContent>
      </Tooltip>
    );
  };

  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            {logo ? (
                 <Image
                    src={logo.imageUrl}
                    alt={logo.description}
                    width={32}
                    height={32}
                    data-ai-hint={logo.imageHint}
                    className="rounded-full"
                />
            ) : (
                <BookOpen className="h-5 w-5 transition-all group-hover:scale-110" />
            )}
            <span className="sr-only">FeeSahayak AI</span>
          </Link>
          {navItems.map(renderNavItem)}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          {adminNavItems.map(renderNavItem)}
        </nav>
      </aside>
    </TooltipProvider>
  );
}
