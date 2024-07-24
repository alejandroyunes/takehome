import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  res.status(200).json({
    id: id as string,
    name: "Diego Segura",
    location: "New York, NY",
    avatar: "https://picsum.photos/200/300",
    description: "writer and designer\nrsvp below\nfollow for event updates",
    potential: 14,
    instagram: "@messybirkin",
    instagram_followers: "128k",
    tiktok: "@messybirkin",
    pics: ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"],
  });
}
