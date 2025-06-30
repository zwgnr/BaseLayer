// Get manifest from BaseLayer static files
import {
	type ComponentManifest,
	ComponentManifestSchema,
} from "../../../components/src/schema.js";

export async function getManifest(): Promise<ComponentManifest> {
	// Default to production, but allow dev override for local MCP development
	const apiUrl = process.env.NODE_ENV === 'development'
		? 'http://localhost:3000' 
		: 'https://baselayer.dev';

	try {
		const response = await fetch(`${apiUrl}/manifest.json`);

		if (!response.ok) {
			throw new Error(
				`Static file returned ${response.status}: ${response.statusText}`,
			);
		}

		const rawManifest = await response.json();

		// Validate the fetched manifest
		try {
			const validatedManifest = ComponentManifestSchema.parse(rawManifest);
			return validatedManifest;
		} catch (validationError) {
			console.error(`Manifest validation failed:`, validationError);
			throw new Error(
				`Fetched manifest does not conform to schema: ${
					validationError instanceof Error
						? validationError.message
						: String(validationError)
				}`,
			);
		}
	} catch (error) {
		console.error(`Failed to fetch manifest from static files:`, error);
		throw new Error(
			`Failed to fetch component manifest: ${
				error instanceof Error ? error.message : String(error)
			}`,
		);
	}
}
