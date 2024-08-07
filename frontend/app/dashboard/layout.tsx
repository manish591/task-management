import Link from 'next/link';
import {
  Bell,
  ChevronsRight,
  Home,
  LineChart,
  Settings,
  SquareKanban,
  Sun,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function DashboardLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold">Manish Devrani</h3>
            </div>
          </div>
          <div className="px-4 lg:px-6 flex justify-between">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent ml-auto h-8 w-8"
              >
                <Bell className="h-4 w-4" />
                <span className="sr-only">Updates</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparentml-auto h-8 w-8"
              >
                <Sun className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparentml-auto h-8 w-8"
              >
                <ChevronsRight className="h-4 w-4" />
                <span className="sr-only">Collapse</span>
              </Button>
            </div>
            <Button variant="secondary" className="h-8">
              Logout
            </Button>
          </div>
          <div className="flex-1 mt-4">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
              >
                <SquareKanban className="h-4 w-4" />
                Boards
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
              >
                <Settings className="h-4 w-4" />
                Settings{' '}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
              >
                <Users className="h-4 w-4" />
                Teams
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </div>
      {children}
      {modal}
    </div>
  );
}
