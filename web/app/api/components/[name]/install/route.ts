import { type NextRequest, NextResponse } from "next/server";

import { existsSync, readFile } from "node:fs";
import { join } from "node:path";
import { promisify } from "node:util";

const readFileAsync = promisify(readFile);

interface ComponentManifestEntry {
  id: string;
  displayName: string;
  path: string;
  template: string;
  imports: string[];
  meta: {
    category: string;
    status: string;
    description: string;
    tags: string[];
    version: string;
  };
  sha256: string;
}

interface RouteParams {
  params: Promise<{
    name: string;
  }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { name } = await params;

    // Path to the generated manifest
    const manifestPath = join(
      process.cwd(),
      "../packages/components/dist/manifest.json"
    );

    if (!existsSync(manifestPath)) {
      return NextResponse.json(
        {
          error: "Component manifest not found",
          hint: "Run `pnpm generate:manifest` in the components package to generate the manifest",
        },
        { status: 404 }
      );
    }

    const manifestContent = await readFileAsync(manifestPath, "utf8");
    const manifest = JSON.parse(manifestContent);

    const component: ComponentManifestEntry | undefined =
      manifest.components.find(
        (comp: ComponentManifestEntry) =>
          comp.id.toLowerCase() === name.toLowerCase() ||
          comp.displayName.toLowerCase() === name.toLowerCase()
      );

    if (!component) {
      return NextResponse.json(
        { error: `Component '${name}' not found` },
        { status: 404 }
      );
    }

    // Extract dependencies from imports
    const allDeps = component.imports || [];

    // Generate Markdown installation guide
    const markdown = `# ${component.displayName} Installation Guide

## Quick Start

### 1. Install Dependencies
${
  allDeps.length > 0
    ? `\`\`\`bash
npm install ${allDeps.join(" ")}
\`\`\``
    : "No additional dependencies required."
}

### 2. Download Component
\`\`\`bash
curl -o ${component.displayName}.tsx "${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/components/${name}/template"
\`\`\`

### 3. Usage
\`\`\`tsx
import { ${component.displayName} } from './${component.displayName}';

export default function App() {
  return (
    <div>
      <${component.displayName} />
    </div>
  );
}
\`\`\`

## Framework-Specific Setup

### Next.js
\`\`\`bash
npx create-next-app@latest my-app
cd my-app
${
  allDeps.length > 0
    ? `npm install ${allDeps.join(" ")}`
    : "# No additional dependencies needed"
}
curl -o app/components/${component.displayName}.tsx "${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/components/${name}/template"
\`\`\`

### Vite + React
\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
${
  allDeps.length > 0
    ? `npm install ${allDeps.join(" ")}`
    : "# No additional dependencies needed"
}
curl -o src/components/${component.displayName}.tsx "${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/components/${name}/template"
\`\`\`

## Component Details

- **Category**: ${component.meta.category}
- **Status**: ${component.meta.status}
- **Tags**: ${component.meta.tags.join(", ")}
- **Description**: ${component.meta.description}

## API Endpoints

- **Component Data**: \`/api/components/${name}\`
- **Source Code**: \`/api/components/${name}/template\`
- **This Guide**: \`/api/components/${name}/install\`

---
*Generated at ${new Date().toISOString()}*
`;

    return new Response(markdown, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "s-maxage=1800, stale-while-revalidate=86400",
        "Content-Disposition": `inline; filename="${component.displayName}-install.md"`,
        "X-Component-Name": component.displayName,
      },
    });
  } catch (error) {
    const resolvedParams = await params;
    console.error(
      `Error serving install guide for component ${resolvedParams.name}:`,
      error
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
