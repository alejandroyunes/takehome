import { scheduleJob } from 'node-schedule';
import { db } from "~/server/db";
import { githubtUser } from '~/server/db/schema';

export class Cron {
  private counter = 0;
  public start() {
    scheduleJob("* * * * *", async () => {
      console.info("Cron job started");
      await this.downloadNewUser();
    });
  }

  private async downloadNewUser() {
    
    this.counter++;
    if (this.counter > 7) {
      this.counter = 1;
    }

    try {
      const response = await fetch(`https://api.github.com/user/${this.counter}`);
      const userData = await response.json();

      await db.insert(githubtUser).values({
        login: userData.login,
        nodeId: userData.node_id,
        avatarUrl: userData.avatar_url,
        gravatarId: userData.gravatar_id,
        type: userData.type,
        name: userData.name,
        company: userData.company,
        blog: userData.blog,
        location: userData.location,
        email: userData.email,
        twitterUsername: userData.twitter_username,
        createdAt: new Date(userData.created_at),
        updatedAt: new Date(userData.updated_at),
      });

      console.log("New user downloaded and saved to the database.");
    } catch (error) {
      console.error("Error downloading new user:", error);
      throw error;
    }
  }
}
