export async function initBaselayer(): Promise<{
	success: boolean;
	tailwindCss: string;
	instructions: string;
	dependencies: string[];
}> {
	const apiUrl = process.env.BASELAYER_API_URL || "http://localhost:3000";

	try {
		// Fetch BaseLayer CSS from static file endpoint
		const response = await fetch(`${apiUrl}/tailwind.css`);
		if (!response.ok) {
			throw new Error(
				`Static file returned ${response.status}: ${response.statusText}`,
			);
		}
		const tailwindCss = await response.text();

		const dependencies = [
			"react-aria-components",
			"lucide-react",
			"tailwind-variants",
			"tw-animate-css",
		];

		const instructions = `Please set up BaseLayer in this project by completing these steps:

1. **Add BaseLayer CSS**: 
   - Find or create a global CSS file (globals.css, global.css, index.css, app.css, etc.)
   - Add the BaseLayer CSS variables and styles to the file
   - The CSS content is provided below

2. **Update tsconfig.json**:
   - Ensure it has these compilerOptions:
     \`\`\`json
     {
       "compilerOptions": {
         "baseUrl": ".",
         "paths": {
           "@/*": ["./*"]
         }
       }
     }
     \`\`\`
    - **VITE APP SPECIFIC**:
      // tsconfig.json
       "compilerOptions": {
          "baseUrl": ".",
            "paths": {
              "@/*": ["./src/*"]
            }
          }
        }
      // tsconfig.app.json
        "compilerOptions": {
          "baseUrl": ".",
            "paths": {
            "@/*": ["./src/*"]
          }
        }
      // vite.config.ts
        export default defineConfig({
          plugins: [react(), tailwindcss()],
          resolve: {
            alias: {
            "@": path.resolve(__dirname, "./src"),
            },
          },
        })
      \`\`\`

3. **Install dependencies**:
   - Install these packages: ${dependencies.join(", ")}
   - Use the appropriate package manager (pnpm, yarn, or npm)


5. **Create .baselayer**:
create a simple file in the root of the project called .baselayer with the following content:
\`\`\`
BL2.0
\`\`\`

4. **Verify setup**:
   - Check that the CSS file imports the BaseLayer styles
   - Confirm TypeScript paths are configured
   - Ensure all dependencies are installed`;

		return {
			success: true,
			tailwindCss,
			instructions,
			dependencies,
		};
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		console.error(`❌ Failed to fetch BaseLayer setup:`, errorMessage);

		return {
			success: false,
			tailwindCss: "",
			instructions: `❌ Failed to fetch BaseLayer CSS: ${errorMessage}`,
			dependencies: [],
		};
	}
}
