// Component Manifest Schema Definition
// This defines the structure for machine-readable component metadata

export interface ComponentMeta {
  category: string;
  status: 'alpha' | 'beta' | 'stable' | 'deprecated';
  description: string;
  tags: string[];
  version: string;
}

export interface ComponentManifestEntry {
  id: string;
  displayName: string;
  path: string;
  template: string;
  meta: ComponentMeta;
  sha256: string;
}

export interface ComponentManifest {
  generatedAt: string;
  version: string;
  components: ComponentManifestEntry[];
}

export interface EndpointDefinition {
  manifest: string;
  component: string;
  template: string;
  search: string;
}

export interface ManifestMetadata {
  generator: string;
  generatedAt: string;
  packageVersion: string;
  apiVersion: string;
  checksums: Record<string, string>;
}

// JSON Schema for validation
export const ComponentManifestSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  required: ["generatedAt", "version", "components"],
  properties: {
    generatedAt: {
      type: "string",
      format: "date-time",
      description: "ISO timestamp when manifest was generated"
    },
    version: {
      type: "string",
      pattern: "^\\d+\\.\\d+\\.\\d+(-[\\w\\.-]+)?$",
      description: "Package version"
    },
    components: {
      type: "array",
      items: {
        $ref: "#/definitions/ComponentManifestEntry"
      }
    }
  },
  definitions: {
            ComponentManifestEntry: {
          type: "object",
          required: ["id", "displayName", "path", "template", "meta", "sha256"],
          properties: {
            id: { type: "string" },
            displayName: { type: "string" },
            path: { type: "string" },
            template: { type: "string" },
        meta: { $ref: "#/definitions/ComponentMeta" },
        sha256: { type: "string" }
      }
    },
    ComponentMeta: {
      type: "object",
      required: ["category", "status", "description", "tags", "version"],
      properties: {
        category: { type: "string" },
        status: {
          type: "string",
          enum: ["alpha", "beta", "stable", "deprecated"]
        },
        description: { type: "string" },
        tags: {
          type: "array",
          items: { type: "string" }
        },
        version: { type: "string" }
      }
    }
  }
} as const;

// Type exports
export type ComponentId = ComponentManifestEntry['id'];
export type ComponentCategory = ComponentMeta['category'];
export type ComponentStatus = ComponentMeta['status']; 