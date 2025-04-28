'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button'; // shadcn button
import { FcGoogle } from 'react-icons/fc';
import { useEffect } from 'react';

export default function SignInPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        router.push('/'); // redirect if already signed in
      }
    });
  }, []);

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`, // Important!
      },
    });

    if (error) {
      console.error('Google sign-in error:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white border rounded-xl p-8 shadow-md text-center space-y-6">
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="text-gray-500">Sign in to your account to continue</p>
        
        <Button
          onClick={handleSignIn}
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={20} />
          Continue with Google
        </Button>
{/* 
        <p className="text-sm text-gray-500">
          Don’t have an account?
        </p> */}

      </div>
    </div>
  );
}
