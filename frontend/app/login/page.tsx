import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getSelfData } from '@/app/actions';
import { redirect } from 'next/navigation';
import LoginForm from '@/app/login/loginform';

export default async function Login() {
  const { isAuthenticated } = await getSelfData();

  if (isAuthenticated) {
    return redirect('/dashboard');
  }

  return (
    <Card className="mx-auto max-w-md my-24 lg:my-32">
      <CardHeader>
        <CardTitle className="text-3xl text-center">
          Welcome to Workflo!
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <LoginForm />
        <div className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link href="/signup" className="underline">
            signup
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
