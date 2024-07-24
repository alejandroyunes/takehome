import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({

  getLatestUser: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.githubtUser.findFirst({
      orderBy: (github_user, { desc }) => [desc(github_user.createdAt)],
    });
  }),
});
