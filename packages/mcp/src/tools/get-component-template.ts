// Get component template from BaseLayer API
export async function getComponentTemplate(
  componentId: string,
  componentName: string
): Promise<string> {
  const apiUrl = process.env.BASELAYER_API_URL || "http://localhost:3000";

  try {
    console.log(
      `🔍 Fetching ${componentId} template from ${apiUrl}/api/components/${componentId}/template`
    );

    const response = await fetch(
      `${apiUrl}/api/components/${componentId}/template`
    );

    if (!response.ok) {
      throw new Error(
        `API returned ${response.status}: ${response.statusText}`
      );
    }

    const template = await response.text();
    // For now, just return the template as-is since our components use the correct names already

    console.log(`✅ Successfully fetched ${componentId} template`);
    return template;
  } catch (error) {
    console.error(`❌ Failed to fetch component template:`, error);
    throw new Error(
      `Failed to fetch ${componentId} component: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}