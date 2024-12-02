// /app/auth/page.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    // Automatically send the user to the sign-in page
    router.push('/auth/sign-in');
  }, [router]);

  return null; // We don't need to show anything here
}
