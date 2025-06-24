import { NextResponse } from 'next/server';

import { existsSync, readFile } from 'node:fs';
import { join } from 'node:path';
import { promisify } from 'node:util';

const readFileAsync = promisify(readFile);

export async function GET() {
  try {
    // Path to the generated manifest
    const manifestPath = join(process.cwd(), '../packages/components/dist/manifest.json');
    
    if (!existsSync(manifestPath)) {
      return NextResponse.json(
        { 
          error: 'Component manifest not found',
          hint: 'Run `pnpm generate:manifest` in the components package to generate the manifest'
        },
        { status: 404 }
      );
    }

    const manifestContent = await readFileAsync(manifestPath, 'utf8');
    const manifest = JSON.parse(manifestContent);

    // Validate manifest structure
    if (!manifest.version || !manifest.components || !manifest.generatedAt) {
      return NextResponse.json(
        { 
          error: 'Invalid manifest structure',
          hint: 'The manifest file appears to be corrupted. Try regenerating it.'
        },
        { status: 500 }
      );
    }

    return NextResponse.json(manifest, {
      headers: {
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/json',
        'X-Manifest-Version': manifest.version,
        'X-Component-Count': manifest.components.length.toString(),
        'X-Generated-At': manifest.generatedAt
      }
    });

  } catch (error) {
    console.error('Error serving manifest:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to load component manifest',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Support CORS for cross-origin requests
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 