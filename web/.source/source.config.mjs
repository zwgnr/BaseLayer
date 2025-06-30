// source.config.ts
import { defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  dir: "app/docs/content",
  docs: {
    schema: frontmatterSchema.extend({
      isRAC: z.boolean().optional().default(false)
    })
  }
});
export {
  docs
};
