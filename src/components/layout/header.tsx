'use client';

import Link from 'next/link';
import {
  LayoutDashboard,
  Wallet,
  Receipt,
  MessageSquare,
  Megaphone,
  UserCog,
  LogOut,
  PanelLeft,
  BookOpen
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const mobileNavItems = [
    { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/fees', icon: Receipt, label: 'Fees' },
    { href: '/payments', icon: Wallet, label: 'Payments' },
    { href: '/chat', icon: MessageSquare, label: 'Chatbot' },
    { href: '/announcements', icon: Megaphone, label: 'Announcements' },
    { href: '/admin', icon: UserCog, label: 'Admin' },
  ];

export function AppHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const avatar = PlaceHolderImages.find((img) => img.id === 'user-avatar');

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <BookOpen className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">FeeSahayak AI</span>
            </Link>
            {mobileNavItems.map(({ href, icon: Icon, label }) => (
                <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                    <Icon className="h-5 w-5" />
                    {label}
                </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="relative ml-auto flex-1 md:grow-0">
        {/* Can be used for search bar if needed */}
      </div>
      <ThemeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            {avatar && user ? (
                 <Image
                    src={avatar.imageUrl}
                    width={36}
                    height={36}
                    alt="User Avatar"
                    data-ai-hint={avatar.imageHint}
                    className="overflow-hidden rounded-full"
                />
            ) : (
                <div className='w-9 h-9 bg-muted rounded-full'/>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{user?.email || 'My Account'}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push('#')}>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push('#')}>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
