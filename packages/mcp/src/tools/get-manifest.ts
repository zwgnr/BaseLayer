// Get manifest from BaseLayer static files
export async function getManifest(): Promise<any> {
  const apiUrl = process.env.BASELAYER_API_URL || "http://localhost:3000";

  try {
    console.log(`🔍 Fetching component manifest from ${apiUrl}/manifest.json`);

    const response = await fetch(`${apiUrl}/manifest.json`);

    if (!response.ok) {
      throw new Error(
        `Static file returned ${response.status}: ${response.statusText}`
      );
    }

    const manifest = await response.json();
    console.log(
      `✅ Successfully fetched manifest with ${manifest.components.length} components`
    );
    return manifest;
  } catch (error) {
    console.error(`❌ Failed to fetch manifest from static files:`, error);
    throw new Error(
      `Failed to fetch component manifest: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
