/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: file is safe */
import { codeToHtml } from "shiki";

export const CSSContentDisplay = async () => {
  try {
    // Fetch CSS content from the static endpoint
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/tailwind.css`, {
      // Add cache control for better performance
      cache: 'force-cache'
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch CSS: ${response.status} ${response.statusText}`);
    }
    
    const cssContent = await response.text();

    // Generate both light and dark versions with CSS syntax highlighting
    const lightHtml = await codeToHtml(cssContent, {
      lang: "css",
      theme: "catppuccin-latte",
    });
    
    const darkHtml = await codeToHtml(cssContent, {
      lang: "css",
      theme: "catppuccin-frappe",
    });

    return (
      <div className="w-full">
        <div className="max-h-96 overflow-auto rounded-lg bg-[#eff1f5] dark:bg-[#303446]">
          <div 
            className="block dark:hidden" 
            dangerouslySetInnerHTML={{ __html: lightHtml }} 
          />
          <div 
            className="hidden dark:block" 
            dangerouslySetInnerHTML={{ __html: darkHtml }} 
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading CSS:', error);
    return (
      <div className="w-full">
        <div className="mb-2 text-red-500 text-sm">
          Error loading CSS file
        </div>
        <pre className="max-h-96 w-full overflow-auto rounded-lg border bg-red-50 p-4 font-mono text-xs">
          <code>Error loading CSS: {error instanceof Error ? error.message : 'Unknown error'}</code>
        </pre>
      </div>
    );
  }
}; 