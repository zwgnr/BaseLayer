import { z } from "astro:content";

export const docsCollection = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).optional(),
});
export const collections = { docs: docsCollection };
