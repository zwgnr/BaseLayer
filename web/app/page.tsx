import Image from "next/image";
import Link from "next/link";

import { Button } from "@baselayer/components";
import {
	Accessibility,
	ArrowRight,
	CodeIcon,
	Github,
	MessageCircle,
	Palette,
	Server,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-surface via-surface to-surface-2">
			{/* Navigation */}
			<nav className="relative z-50 flex items-center justify-between px-6 py-4">
				<div className="flex items-center gap-2">
					<Image
						src="/bl.svg"
						alt="BaseLayer"
						width={40}
						height={40}
						className="rounded-lg dark:invert"
					/>
					<span className="font-bold text-xl uppercase tracking-tight">
						BaseLayer
					</span>
				</div>

				<div className="flex items-center gap-6">
					<Link
						href="/docs/intro"
						className="rounded-full px-4 py-2 font-medium text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
					>
						Docs
					</Link>
					<Link
						href="https://github.com/zachshallbetter/BaseLayer"
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full px-4 py-2 font-medium text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
					>
						GitHub
					</Link>
					<ThemeToggle />
				</div>
			</nav>

			{/* Hero Section */}
			<main className="relative overflow-hidden">
				<div className="relative z-10 flex h-screen flex-col items-center justify-center px-6 py-20 text-center md:py-28 lg:py-36">
					<div className="mx-auto max-w-4xl">
						{/* Main Heading */}
						<h1 className="mb-6 font-extrabold text-5xl text-fg leading-tight tracking-tight md:text-7xl lg:text-8xl">
							Own Your UI Code.
						</h1>

						{/* Subtitle */}
						<p className="mx-auto mb-12 max-w-3xl text-fg-muted text-xl leading-relaxed md:text-2xl lg:text-3xl">
							Components that ship to your codebase, not your node_modules.
							AI-optimized, accessible, yours.
						</p>

						{/* Enhanced CTA Button */}
						<div className="mb-16 flex flex-row flex-col justify-center gap-4 rounded-full">
							<div className="group relative">
								{/* Glow ring */}
								<div className="-inset-0.5 md:-inset-1 absolute rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-60 blur-sm transition-all duration-300 group-hover:opacity-75 group-hover:blur-md md:blur-md md:group-hover:blur-lg"></div>
								
								{/* Inner glow for depth */}
								<div className="-inset-0.5 absolute rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-30 blur-sm transition-all duration-300 group-hover:opacity-40"></div>

								<Link
									href="/docs/intro"
									className="relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-lg text-primary-fg shadow-xl transition-all duration-300 hover:shadow-2xl md:px-12 md:py-5 md:text-xl"
								>
									<span>Start Building</span>
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* AI-Ready Features Section */}
				<div className="relative z-10 px-6 pb-20 md:px-8 lg:px-12">
					<div className="mx-auto max-w-7xl">
						<div className="mb-16 text-center">
							<h2 className="mb-4 font-bold text-3xl text-fg md:text-4xl">
								Built for the AI era
							</h2>
							<p className="mx-auto max-w-3xl text-fg-muted text-xl">
								Seamlessly integrate with your favorite AI development tools and
								workflows
							</p>
						</div>

						{/* Feature Cards - Improved Design */}
						<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
							{/* You Own Your Code */}
							<div className="group hover:-translate-y-1 rounded-2xl border border-border bg-surface-2 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
								<div className="mb-6 flex items-center gap-4">
									<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
										<CodeIcon className="h-7 w-7 text-primary" />
									</div>
									<div>
										<h3 className="font-bold text-fg text-xl">
											You Own Your Code
										</h3>
										<p className="text-fg-muted text-sm">
											No dependencies, just code
										</p>
									</div>
								</div>
								<p className="text-fg-muted leading-relaxed">
									Not a library or dependency. Copy the code you need and make
									it yours. Modify, extend, and customize without restrictions
									or version lock-in.
								</p>
							</div>

							{/* MCP */}
							<div className="group hover:-translate-y-1 rounded-2xl border border-border bg-surface-2 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
								<div className="mb-6 flex items-center gap-4">
									<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
										<Server className="h-7 w-7 text-primary" />
									</div>
									<div>
										<h3 className="font-bold text-fg text-xl">MCP</h3>
										<p className="text-fg-muted text-sm">
											Model Context Protocol Server
										</p>
									</div>
								</div>
								<p className="text-fg-muted leading-relaxed">
									BaseLayer has an MCP server ready to use with your favorite AI
									tools like Cursor.
								</p>
							</div>

							{/* Chat Bots & AI Tools */}
							<div className="group hover:-translate-y-1 rounded-2xl border border-border bg-surface-2 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
								<div className="mb-6 flex items-center gap-4">
									<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
										<MessageCircle className="h-7 w-7 text-primary" />
									</div>
									<div>
										<h3 className="font-bold text-fg text-xl">
											Chat Bots & AI Tools
										</h3>
										<p className="text-fg-muted text-sm">
											ChatGPT, Claude, and more
										</p>
									</div>
								</div>
								<p className="text-fg-muted leading-relaxed">
									Designed for use with your favorite chat bots and AI tools.
									llms.txt and more keep your AI tools in sync with your
									components.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Traditional Features Section - Improved */}
				<div className="relative z-10 px-6 pb-20 md:px-8 lg:px-12">
					<div className="mx-auto max-w-6xl">
						<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
							<div className="group text-center">
								<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
									<Palette className="h-8 w-8 text-primary" />
								</div>
								<h3 className="mb-3 font-semibold text-fg text-xl">
									Beautiful Design
								</h3>
								<p className="text-fg-muted leading-relaxed">
									Carefully crafted components that look great out of the box
									with thoughtful attention to detail.
								</p>
							</div>

							<div className="group text-center">
								<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
									<Accessibility className="h-8 w-8 text-primary" />
								</div>
								<h3 className="mb-3 font-semibold text-fg text-xl">
									Accessible
								</h3>
								<p className="text-fg-muted leading-relaxed">
									Built on React Aria Components with full keyboard navigation
									and screen reader support.
								</p>
							</div>

							<div className="group text-center">
								<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
									<Github className="h-8 w-8 text-primary" />
								</div>
								<h3 className="mb-3 font-semibold text-fg text-xl">
									Open Source
								</h3>
								<p className="text-fg-muted leading-relaxed">
									Completely open source and free to use. MIT Licensed.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* CTA Section - Improved */}
				<div className="relative z-10 px-6 pb-20 md:px-8 lg:px-12">
					<div className="mx-auto max-w-4xl text-center">
						<div className="rounded-3xl border border-border bg-gradient-to-br from-surface-2 to-surface-3 p-12 shadow-lg">
							<h2 className="mb-4 font-bold text-3xl text-fg md:text-4xl">
								Ready to build something amazing?
							</h2>
							<p className="mx-auto mb-8 max-w-2xl text-fg-muted text-lg leading-relaxed">
								Join developers who are building the next generation of
								applications with BaseLayer components.
							</p>
							<Link
								href="/docs/intro"
								className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-lg text-primary-fg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
							>
								<span>Start Building</span>
								<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
							</Link>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
