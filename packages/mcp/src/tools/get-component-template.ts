// Get component template from BaseLayer static files
export async function getComponentTemplate(
  componentId: string,
  componentName: string
): Promise<string> {
  const apiUrl = process.env.BASELAYER_API_URL || "http://localhost:3000";

  try {
    const templateUrl = `${apiUrl}/templates/${componentId}.txt`;
    console.log(`🔍 Fetching ${componentId} template from ${templateUrl}`);
    console.log(`🔍 API URL: ${apiUrl}`);
    console.log(`🔍 Component ID: ${componentId}`);
    console.log(`🔍 Environment BASELAYER_API_URL:`, process.env.BASELAYER_API_URL);

    const response = await fetch(templateUrl);

    if (!response.ok) {
      throw new Error(
        `Static file returned ${response.status}: ${response.statusText}`
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