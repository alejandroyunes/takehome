import { z } from 'zod';
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const githubUserRouter = t.router({
  getLatestUser: t.procedure
    .input(z.string())
    .query(async ({ input }) => {
      const response = await fetch(`https://api.github.com/users/${input}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      return data;
    }),
});