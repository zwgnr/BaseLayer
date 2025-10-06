import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

import path from "node:path";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@/components/ui": path.resolve(
				__dirname,
				"../packages/components/src/core",
			),
		};
		return config;
	},
};

export default withMDX(nextConfig);
