import { NextResponse } from 'next/server';
import { readFile, existsSync } from 'fs';
import { promisify } from 'util';
import { join } from 'path';

const readFileAsync = promisify(readFile);

export async function GET() {
  try {
    // Path to the tailwind CSS file
    const tailwindPath = join(process.cwd(), '../packages/components/src/tailwind.css');
    
    if (!existsSync(tailwindPath)) {
      return NextResponse.json(
        { 
          error: 'Tailwind CSS file not found',
          hint: 'The tailwind.css file should be located at packages/components/src/tailwind.css'
        },
        { status: 404 }
      );
    }

    const tailwindContent = await readFileAsync(tailwindPath, 'utf8');

    return new Response(tailwindContent, {
      headers: {
        'Content-Type': 'text/css; charset=utf-8',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
        'Content-Disposition': 'inline; filename="tailwind.css"',
        'X-File-Type': 'tailwind-css',
        'X-File-Purpose': 'BaseLayer design system styles'
      }
    });

  } catch (error) {
    console.error('Error serving tailwind CSS:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to load tailwind CSS',
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