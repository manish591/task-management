'use client';

import { Eye, EyeOff } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignupForm() {
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  async function handleSignupUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
        {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({
            firstname,
            email,
            password,
          }),
        },
      );

      if (res.status === 201) {
        router.push('/dashboard');
      }
    } catch (err) {
      console.log('Failed to signup', err);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSignupUser}>
      <div className="grid gap-2">
        <Label htmlFor="first-name" className="sr-only">
          First name
        </Label>
        <Input
          id="first-name"
          placeholder="First name"
          required
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email" className="sr-only">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
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
    </form>
  );
}
