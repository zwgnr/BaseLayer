// Get component template from BaseLayer static files
export async function getComponentTemplate(componentId: string) {
	// Default to production, but allow dev override for local MCP development
	const apiUrl =
		process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: "https://baselayer.dev";

	try {
		const templateUrl = `${apiUrl}/templates/${componentId}.txt`;
		const response = await fetch(templateUrl);

		if (!response.ok) {
			throw new Error(
				`Static file returned ${response.status}: ${response.statusText}`,
			);
		}

		const template = await response.text();
		return template;
	} catch (error) {
		console.error(`Failed to fetch component template:`, error);
		throw new Error(
			`Failed to fetch ${componentId} component: ${
				error instanceof Error ? error.message : String(error)
			}`,
		);
	}
}
