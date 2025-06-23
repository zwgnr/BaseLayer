
// Get manifest from BaseLayer API
export async function getManifest(): Promise<any> {
  const apiUrl = process.env.BASELAYER_API_URL || "http://localhost:3000";

  try {
    console.log(`🔍 Fetching component manifest from ${apiUrl}/api/manifest`);

    const response = await fetch(`${apiUrl}/api/manifest`);

    if (!response.ok) {
      throw new Error(
        `API returned ${response.status}: ${response.statusText}`
      );
    }

    const manifest = await response.json();
    console.log(
      `✅ Successfully fetched manifest with ${manifest.components.length} components`
    );
    return manifest;
  } catch (error) {
    console.error(`❌ Failed to fetch manifest from API:`, error);
    throw new Error(
      `Failed to fetch component manifest: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
