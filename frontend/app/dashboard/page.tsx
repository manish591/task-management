import Link from 'next/link';
import {
  Bell,
  Calendar,
  ChevronsRight,
  CircleUser,
  Filter,
  HelpCircle,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Plus,
  PlusCircle,
  Search,
  Settings,
  Share,
  ShoppingCart,
  Sparkle,
  Sparkles,
  SquareKanban,
  Sun,
  Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Dashboard() {
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
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Package2 className="h-6 w-6" />
                      <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        6
                      </Badge>
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Package className="h-5 w-5" />
                      Products
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Users className="h-5 w-5" />
                      Customers
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <LineChart className="h-5 w-5" />
                      Analytics
                    </Link>
                  </nav>
                  <div className="mt-auto">
                    <Card>
                      <CardHeader>
                        <CardTitle>Upgrade to Pro</CardTitle>
                        <CardDescription>
                          Unlock all features and get unlimited access to our
                          support team.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button size="sm" className="w-full">
                          Upgrade
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </SheetContent>
              </Sheet>
              <h1 className="text-lg font-semibold md:text-3xl">
                Good Morning, Manish!
              </h1>
            </div>
            <div className="flex gap-2 text-sm items-center">
              <span>Help & Feedback</span>
              <HelpCircle strokeWidth={1} className="w-6 h-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-muted/20 grid grid-cols-[30%_1fr] gap-4 items-center border p-4 rounded-md">
              <Image src="/task.svg" width={200} height={200} alt="task" />
              <div>
                <h3 className="text-md font-bold text-muted-foreground">
                  Introducing tags
                </h3>
                <p className="text-sm text-muted-foreground/80">
                  Easily categorize and find your notes by adding tags. Keep
                  your workspace clutter-free and efficient.
                </p>
              </div>
            </div>
            <div className="bg-muted/20 grid grid-cols-[30%_1fr] gap-4 items-center border p-4 rounded-md">
              <Image src="/task.svg" width={200} height={200} alt="task" />
              <div>
                <h3 className="text-md font-bold text-muted-foreground">
                  Share Notes Instantly
                </h3>
                <p className="text-sm text-muted-foreground/80">
                  Effortlessly share your notes with others via email or link.
                  Enhance collaboration with quick sharing options.
                </p>
              </div>
            </div>
            <div className="bg-muted/20 grid grid-cols-[30%_1fr] gap-4 items-center border p-4 rounded-md">
              <Image src="/task.svg" width={200} height={200} alt="task" />
              <div>
                <h3 className="text-md font-bold text-muted-foreground">
                  Access Anywhere
                </h3>
                <p className="text-sm text-muted-foreground/80">
                  Sync your notes across all devices. Stay productive whether
                  you're on your phone, tablet, or computer.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none"
                />
              </div>
            </form>
            <div className="flex gap-4 items-center">
              <Button variant="secondary" className="flex items-center gap-2">
                <span>Calender View</span>
                <Calendar strokeWidth={1} className="w-5 h-5" />
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <span>Automation</span>
                <Sparkles strokeWidth={1} className="w-5 h-5" />
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <span>Filter</span>
                <Filter strokeWidth={1} className="w-5 h-5" />
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <span>Share</span>
                <Share strokeWidth={1} className="w-5 h-5" />
              </Button>
              <Button className="flex items-center gap-2">
                <span>Create new</span>
                <PlusCircle strokeWidth={1} className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no tasks yet
              </h3>
              <p className="text-sm text-muted-foreground">
                Create your first task below
              </p>
              <Button className="mt-4">Create Task</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
