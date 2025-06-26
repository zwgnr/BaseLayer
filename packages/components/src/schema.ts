// Component Manifest Schema Definition
// This defines the structure for machine-readable component metadata

import { z } from 'zod';

// Zod schemas
export const ComponentMetaSchema = z.object({
  name: z.string(),
  category: z.string(),
  status: z.enum(['alpha', 'beta', 'stable', 'deprecated']),
  description: z.string(),
  tags: z.array(z.string()),
  version: z.string(),
});

export const ComponentManifestEntrySchema = z.object({
  id: z.string(),
  path: z.string(),
  template: z.string(),
  meta: ComponentMetaSchema,
  sha256: z.string(),
});

export const ComponentManifestSchema = z.object({
  generatedAt: z.string().datetime(),
  version: z.string().regex(/^\d+\.\d+\.\d+(-[\w.-]+)?$/),
  components: z.array(ComponentManifestEntrySchema),
});

export const EndpointDefinitionSchema = z.object({
  manifest: z.string(),
  component: z.string(),
  template: z.string(),
  search: z.string(),
});

export const ManifestMetadataSchema = z.object({
  generator: z.string(),
  generatedAt: z.string(),
  packageVersion: z.string(),
  apiVersion: z.string(),
  checksums: z.record(z.string()),
});

// Example registry schemas
export const ExampleRegistryEntrySchema = z.object({
  name: z.string(),
  type: z.literal("registry:example"),
  files: z.array(z.object({
    path: z.string(),
    type: z.literal("registry:example"),
  })),
});

export const ExamplesRegistrySchema = z.object({
  items: z.array(ExampleRegistryEntrySchema),
});

// Derived TypeScript types
export type ComponentMeta = z.infer<typeof ComponentMetaSchema>;
export type ComponentManifestEntry = z.infer<typeof ComponentManifestEntrySchema>;
export type ComponentManifest = z.infer<typeof ComponentManifestSchema>;
export type EndpointDefinition = z.infer<typeof EndpointDefinitionSchema>;
export type ManifestMetadata = z.infer<typeof ManifestMetadataSchema>;
export type ExampleRegistryEntry = z.infer<typeof ExampleRegistryEntrySchema>;
export type ExamplesRegistry = z.infer<typeof ExamplesRegistrySchema>;

// Type aliases for convenience
export type ComponentId = ComponentManifestEntry['id'];
export type ComponentCategory = ComponentMeta['category'];
export type ComponentStatus = ComponentMeta['status']; 