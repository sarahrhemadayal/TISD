import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  await supabase.auth.getSession(); // sets the session cookie
  return NextResponse.redirect(new URL('/', request.url));
}
