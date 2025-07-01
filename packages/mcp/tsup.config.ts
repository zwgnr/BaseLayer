import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm"],
	outDir: "build",
	target: "node18",
	bundle: true,
	minify: false,
	sourcemap: true,
	clean: true,
	banner: {
		js: "#!/usr/bin/env node",
	},
	external: ["@modelcontextprotocol/sdk"],
	noExternal: ["@baselayer/registry"],
});
