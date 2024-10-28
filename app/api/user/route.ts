// app/api/user/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { Session } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET() {
  const session: Session | null = await getServerSession(authOptions);

  if (session && session.user) {
    return NextResponse.json({ role: session.user.role });
  } else {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }
}
