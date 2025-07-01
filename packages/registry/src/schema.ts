// Component Registry Schema Definition
// This defines the structure for machine-readable component metadata

import { z } from "zod";

// Zod schemas
export const ComponentMetaSchema = z.object({
	name: z.string(),
	category: z.string(),
	status: z.enum(["alpha", "beta", "stable", "deprecated"]),
	description: z.string(),
	tags: z.array(z.string()),
});

export const ComponentRegistryEntrySchema = z.object({
	id: z.string(),
	template: z.string(),
	meta: ComponentMetaSchema,
});

export const ComponentRegistrySchema = z.object({
	buildHash: z.string(),
	version: z.string().regex(/^\d+\.\d+\.\d+(-[\w.-]+)?$/),
	components: z.array(ComponentRegistryEntrySchema),
});

// Example registry schemas
export const ExampleRegistryEntrySchema = z.object({
	name: z.string(),
	type: z.literal("registry:example"),
	files: z.array(
		z.object({
			path: z.string(),
			type: z.literal("registry:example"),
		}),
	),
});

export const ExamplesRegistrySchema = z.object({
	items: z.array(ExampleRegistryEntrySchema),
});

// Derived TypeScript types
export type ComponentMeta = z.infer<typeof ComponentMetaSchema>;
export type ComponentRegistryEntry = z.infer<
	typeof ComponentRegistryEntrySchema
>;
export type ComponentRegistry = z.infer<typeof ComponentRegistrySchema>;
export type ExampleRegistryEntry = z.infer<typeof ExampleRegistryEntrySchema>;
export type ExamplesRegistry = z.infer<typeof ExamplesRegistrySchema>;

// Type aliases for convenience
export type ComponentId = ComponentRegistryEntry["id"];
export type ComponentCategory = ComponentMeta["category"];
export type ComponentStatus = ComponentMeta["status"];
