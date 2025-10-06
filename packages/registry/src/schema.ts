// Registry Schema Definition
// This defines the structure for machine-readable component metadata compatible with shadcn

import { z } from "zod";

// Zod schemas for shadcn registry compatibility
export const RegistryItemFileSchema = z.object({
	path: z.string(),
	content: z.string().optional(),
	type: z.enum([
		"registry:block",
		"registry:component",
		"registry:lib",
		"registry:hook",
		"registry:ui",
		"registry:page",
		"registry:file",
		"registry:style",
		"registry:theme",
		"registry:item",
	]),
	target: z.string().optional(),
});

export const RegistryItemSchema = z.object({
	name: z.string(),
	type: z.enum([
		"registry:block",      // Complex components with multiple files
		"registry:component",  // Simple components
		"registry:lib",        // Lib and utils
		"registry:hook",       // Hooks
		"registry:ui",         // UI components and single-file primitives
		"registry:page",       // Page or file-based routes
		"registry:file",       // Miscellaneous files
		"registry:style",      // Registry styles (e.g. new-york)
		"registry:theme",      // Themes
		"registry:item",       // Universal registry items
	]),
	title: z.string().optional(),
	description: z.string().optional(),
	author: z.string().optional(),
	categories: z.array(z.string()).optional(),
	docs: z.string().optional(),
	registryDependencies: z.array(z.string()).optional(),
	dependencies: z.array(z.string()).optional(),
	devDependencies: z.array(z.string()).optional(),
	files: z.array(RegistryItemFileSchema),
	tailwind: z
		.object({
			config: z.record(z.any()).optional(),
		})
		.optional(),
	cssVars: z.record(z.any()).optional(),
	css: z.record(z.any()).optional(),
	meta: z.record(z.any()).optional(),
});

export const RegistrySchema = z.object({
	name: z.string(),
	$schema: z.string(),
	homepage: z.string().url().optional(),
	items: z.array(RegistryItemSchema),
});

// Derived TypeScript types
export type RegistryItem = z.infer<typeof RegistryItemSchema>;
export type RegistryItemFile = z.infer<typeof RegistryItemFileSchema>;
export type Registry = z.infer<typeof RegistrySchema>;
