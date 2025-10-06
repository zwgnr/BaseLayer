import { NextResponse } from "next/server";

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export async function GET(
	_request: Request,
	{ params }: { params: Promise<{ segments: string[] }> },
) {
	try {
		const { segments } = await params;

		// If no segments, return the registry index
		if (!segments || segments.length === 0) {
			const registryPath = join(process.cwd(), "public/r/index.json");
			const registryContent = readFileSync(registryPath, "utf8");
			return new NextResponse(registryContent, {
				headers: {
					"Content-Type": "application/json",
					"Cache-Control": "public, max-age=3600",
				},
			});
		}

		// Handle specific registry item requests
		// Support both /r/button and /r/button.json
		const itemName = segments[0].replace(/\.json$/, "");
		const itemPath = join(process.cwd(), `public/r/${itemName}.json`);

		if (!existsSync(itemPath)) {
			return new NextResponse("Registry item not found", { status: 404 });
		}

		const itemContent = readFileSync(itemPath, "utf8");
		return new NextResponse(itemContent, {
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "public, max-age=3600",
			},
		});
	} catch (error) {
		console.error("Error in registry API route:", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
