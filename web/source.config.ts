import { defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
	dir: "app/docs/content",
	docs: {
		schema: frontmatterSchema.extend({
			isRAC: z.boolean().optional().default(false),
		}),
	},
});
