import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    username: string;
  }
  interface Session {
    user: User & {
      username: string;
      id: string
    };
    token: {
      username: string;
      id: string
    };
  }
}
