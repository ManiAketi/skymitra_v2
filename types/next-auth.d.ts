// src/types/next-auth.d.ts
import { DefaultSession, DefaultUser, JWT as DefaultJWT } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    id: string;
    role?: string | null;
  }

  interface Session extends DefaultSession {
    user: {
      id: string;
      role?: string | null;
    } & DefaultSession['user'];
  }

  interface JWT extends DefaultJWT {
    id: string;
    role?: string | null;
  }
}
