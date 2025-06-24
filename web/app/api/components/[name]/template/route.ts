import { type NextRequest, NextResponse } from "next/server";

import { existsSync, readFile } from "node:fs";
import { join } from "node:path";
import { promisify } from "node:util";

const readFileAsync = promisify(readFile);

interface ComponentManifestEntry {
  id: string;
  displayName: string;
  path: string;
  propsSchema: string;
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

    // Load the component source file
    try {
      const componentPath = join(
        process.cwd(),
        "../packages/components",
        component.path
      );

      if (!existsSync(componentPath)) {
        return NextResponse.json(
          {
            error: `Component source file for '${name}' not found`,
            hint: `Expected to find component at: packages/components/${component.path}`,
          },
          { status: 404 }
        );
      }

      let componentContent = await readFileAsync(componentPath, "utf8");

      // Remove the meta export from the component template
      componentContent = componentContent.replace(
        /export const meta = \{[\s\S]*?\} as const;\n\n?/,
        ""
      );

      return new Response(componentContent, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
          "Content-Disposition": `inline; filename="${component.displayName}.tsx"`,
          "X-Component-Name": component.displayName,
          "X-Component-Category": component.meta.category,
          "X-Component-Status": component.meta.status,
        },
      });
    } catch (error) {
      console.error(`Component file not found for ${name}:`, error);
      return NextResponse.json(
        {
          error: `Component source file for '${name}' not found`,
          hint: `Make sure the component exists at packages/components/${component.path}`,
        },
        { status: 404 }
      );
    }
  } catch (error) {
    const resolvedParams = await params;
    console.error(
      `Error serving template for component ${resolvedParams.name}:`,
      error
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
