// Get registry from BaseLayer static files
import {
	type ComponentRegistry,
	ComponentRegistrySchema,
} from "@baselayer/registry";

export async function getRegistry(): Promise<ComponentRegistry> {
	// Default to production, but allow dev override for local MCP development
	const apiUrl = process.env.NODE_ENV === 'development'
		? 'http://localhost:3000' 
		: 'https://baselayer.dev';

	try {
		const response = await fetch(`${apiUrl}/registry.json`);

		if (!response.ok) {
			throw new Error(
				`Static file returned ${response.status}: ${response.statusText}`,
			);
		}

		const rawRegistry = await response.json();

		// Validate the fetched registry
		try {
			const validatedRegistry = ComponentRegistrySchema.parse(rawRegistry);
			return validatedRegistry;
		} catch (validationError) {
			console.error(`Registry validation failed:`, validationError);
			throw new Error(
				`Fetched registry does not conform to schema: ${
					validationError instanceof Error
						? validationError.message
						: String(validationError)
				}`,
			);
		}
	} catch (error) {
		console.error(`Failed to fetch registry from static files:`, error);
		throw new Error(
			`Failed to fetch component registry: ${
				error instanceof Error ? error.message : String(error)
			}`,
		);
	}
}
