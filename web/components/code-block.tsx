import { codeToHtml } from "shiki";

export const CodeBlock = async ({ 
  code, 
  lang = "typescript"
}: { 
  code: string; 
  lang?: string;
}) => {
  try {
    // Generate both light and dark versions
    const lightHtml = await codeToHtml(code, {
      lang,
      theme: "catppuccin-latte",
    });
    
    const darkHtml = await codeToHtml(code, {
      lang,
      theme: "catppuccin-frappe",
    });
    
    return (
      <>
        <div 
          className="block dark:hidden" 
          dangerouslySetInnerHTML={{ __html: lightHtml }} 
        />
        <div 
          className="hidden dark:block" 
          dangerouslySetInnerHTML={{ __html: darkHtml }} 
        />
      </>
    );
  } catch (error) {
    console.error("Failed to highlight code:", error);
    return (
      <pre className="p-4 bg-gray-900 text-gray-100 rounded overflow-auto">
        <code>{code}</code>
      </pre>
    );
  }
}; 