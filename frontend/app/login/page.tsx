'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="mx-auto max-w-md my-24 lg:my-32">
      <CardHeader>
        <CardTitle className="text-3xl text-center">
          Welcome to Workflo!
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input id="email" type="email" placeholder="Email" required />
          </div>
          <div className="w-full items-center gap-1.5">
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <div className="relative w-full">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="pr-10 w-full"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-[50%] translate-y-[50%] right-1 h-7 w-7"
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle password visibility</span>
              </Button>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
        </div>
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
