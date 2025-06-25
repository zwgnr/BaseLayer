import { createMDX } from 'fumadocs-mdx/next'
import type { NextConfig } from 'next'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // async headers() {
  //   return [
  //     {
  //       source: '/templates/:path*.tsx',
  //       headers: [
  //         { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
  //         { key: 'Content-Disposition', value: 'inline' },
  //         { key: 'Cache-Control', value: 's-maxage=3600, stale-while-revalidate=86400' },
  //       ],
  //     },
  //   ];
  // },
}

export default withMDX(nextConfig)
