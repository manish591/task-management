'use server';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SignupForm from './signupform';
import { getSelfData } from '../actions';
import { redirect } from 'next/navigation';

export default async function Signup() {
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
        <SignupForm />
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="underline">
            login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
