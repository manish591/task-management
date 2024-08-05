import Link from 'next/link';
import {
  Calendar,
  Filter,
  HelpCircle,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  Share,
  ShoppingCart,
  Sparkles,
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
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { getSelfData } from '../actions';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const { isAuthenticated } = await getSelfData();

  if (!isAuthenticated) {
    return redirect('/login');
  }

  return (
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
                Easily categorize and find your notes by adding tags. Keep your
                workspace clutter-free and efficient.
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
            {/* <CreateNewButton /> */}
            <Link href="/dashboard/new">
              <Button>Create</Button>
            </Link>
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
  );
}
