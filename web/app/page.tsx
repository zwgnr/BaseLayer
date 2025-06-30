import Image from "next/image";
import Link from "next/link";

import {
	Accessibility,
	ArrowRight,
	CodeIcon,
	Github,
	MessageCircle,
	Palette,
	Server,
	Sparkles,
	Zap,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
	return (
		<div className="relative min-h-screen bg-gradient-to-br from-surface via-surface to-surface-2">
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
						href="https://github.com/zwgnr/BaseLayer"
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
				{/* Animated Background Elements */}
				<div className="absolute inset-0 overflow-hidden">
					{/* Floating Shapes */}
					<div className="-top-40 -left-40 absolute h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
					<div className="-top-20 -right-20 absolute h-60 w-60 rounded-full bg-primary/5 blur-2xl delay-1000"></div>
					<div className="-translate-x-1/2 absolute bottom-0 left-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl delay-500"></div>
					
					{/* Grid Pattern */}
					<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>
				</div>

				<div className="relative z-10 flex h-screen flex-col items-center justify-center px-6 py-20 text-center md:py-28 lg:py-36">
					<div className="mx-auto max-w-4xl">
						{/* Badge */}
						<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-medium text-primary text-sm backdrop-blur-sm">
							<Sparkles className="h-4 w-4" />
							<span>v2 is here</span>
						</div>

						{/* Main Heading with Gradient Text */}
						<h1 className="mb-6 font-bold text-5xl leading-tight tracking-tight md:text-6xl lg:text-8xl">
							<span className="bg-gradient-to-r from-fg via-fg to-fg-muted bg-clip-text text-transparent">
								Own Your UI Code.
							</span>
						</h1>

						{/* Subtitle with Better Typography */}
						<p className="mx-auto mb-12 max-w-3xl text-fg-muted text-xl leading-relaxed md:text-xl lg:text-2xl">
							Components that ship to your{" "}
							<span className="font-semibold text-fg">codebase</span>, not your{" "}
							<span className="font-mono text-primary">node_modules</span>.
							<br />
							<span className="text-lg">AI-optimized, accessible, yours.</span>
						</p>

						{/* Enhanced CTA Section */}
						<div className="mb-16 flex flex-col items-center gap-6">
							<div className="group relative">
								{/* Glowing background effect */}
								<div className="-inset-1 absolute rounded-full bg-gradient-to-r from-primary/50 to-primary/30 opacity-30 blur transition-opacity duration-300 group-hover:opacity-50"></div>
								<Link
									href="/docs/intro"
									className="relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-lg text-primary-fg shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 md:px-10 md:py-5 md:text-xl"
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
								<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300">
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
								<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300">
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
								<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300">
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
