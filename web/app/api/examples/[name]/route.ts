import { NextResponse } from "next/server";

import { getExampleSource } from "@/lib/component-data";

export async function GET(
	_request: Request,
	{ params }: { params: Promise<{ name: string }> },
) {
	try {
		const { name } = await params;
		const exampleSource = await getExampleSource(name);

		if (exampleSource && !exampleSource.includes("not found")) {
			return new NextResponse(exampleSource, {
				headers: {
					"Content-Type": "text/plain",
					"Cache-Control": "public, max-age=3600",
				},
			});
		}

		return new NextResponse("Not found", { status: 404 });
	} catch (error) {
		console.error("Error in examples API route:", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
