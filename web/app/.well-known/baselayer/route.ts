import { NextResponse } from 'next/server';

import { COMPONENTS } from '@baselayer/components';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const components = COMPONENTS;
  
  const wellKnownSpec = {
    "@context": "https://www.w3.org/ns/activitystreams",
    "type": "Service",
    "name": "BaseLayer Component System",
    "summary": "A component system for the AI era",
    "version": "2.0.0",
    "generator": {
      "type": "Application",
      "name": "BaseLayer",
      "version": "2.0.0",
      "url": baseUrl
    },
    "endpoints": {
      "components": `${baseUrl}/api/manifest`,
      "component": `${baseUrl}/api/components/{name}`,
      "template": `${baseUrl}/api/components/{name}/template`,
      "install": `${baseUrl}/api/components/{name}/install`,
      "llms": `${baseUrl}/llms.txt`
    },
    "components": components.reduce((acc, comp) => {
      acc[comp.id] = {
        name: comp.displayName,
        category: comp.meta.category,
        description: comp.meta.description,
        endpoints: {
          spec: `${baseUrl}/api/components/${comp.id}`,
          template: `${baseUrl}/api/components/${comp.id}/template`,
          install: `${baseUrl}/api/components/${comp.id}/install`
        }
      };
      return acc;
    }, {} as Record<string, {
      name: string;
      category: string;
      description: string;
      endpoints: {
        spec: string;
        template: string;
        install: string;
      };
    }>),
    "metadata": {
      "framework": "next.js",
      "ui_library": "react-aria-components",
      "styling": "tailwindcss",
      "typescript": true,
      "accessibility": true,
      "generatedAt": new Date().toISOString()
    },
    "links": [
      {
        "rel": "self",
        "type": "application/json",
        "href": `${baseUrl}/.well-known/baselayer`
      },
      {
        "rel": "components",
        "type": "application/json", 
        "href": `${baseUrl}/api/manifest`
      },
      {
        "rel": "llms-txt",
        "type": "text/plain",
        "href": `${baseUrl}/llms.txt`
      }
    ]
  };

  return NextResponse.json(wellKnownSpec, {
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
      'Content-Type': 'application/json'
    }
  });
} 