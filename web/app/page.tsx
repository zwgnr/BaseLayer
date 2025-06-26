import Image from "next/image";
import Link from "next/link";

import { Button, } from "@baselayer/components";
import { Accessibility, CodeIcon, Github, MessageCircle, Palette, Server } from "lucide-react";

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
          <span className="font-bold text-xl uppercase tracking-tight">BaseLayer</span>
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
        {/* Background Pattern */}

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center md:py-28 lg:py-36">
          <div className="mx-auto max-w-4xl">
            {/* Main Heading */}
            <h1 className="mb-6 font-extrabold text-4xl text-fg leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Build beautiful apps with{" "}
              <span className="animate-pulse bg-gradient-to-r from-primary via-focus to-primary bg-clip-text text-transparent">
                AI-ready components
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-12 max-w-2xl text-fg-muted text-lg leading-relaxed md:text-xl lg:text-2xl">
              Production-ready, accessible primitives powered by React Aria Components and Tailwind CSS. 
              Perfect for modern applications and AI-powered development workflows.
            </p>

            {/* CTA Buttons */}
            <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
              <Button 
                size="lg"
                className="px-8 py-4 font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Get Started
              </Button>
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
                Seamlessly integrate with your favorite AI development tools and workflows
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

              {/* You Own Your Code */}
              <div className="rounded-3xl border border-border bg-gradient-to-br from-surface-2 to-surface-3 p-8 transition-all duration-300 hover:border-focus/50 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <span className="text-3xl"><CodeIcon /></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-fg">You Own Your Code</h3>
                    <p className="text-fg-muted">No dependencies, just code</p>
                  </div>
                </div>
                <p className="text-lg text-secondary-fg leading-relaxed">
                  Not a library or dependency. Copy the code you need and make it yours. 
                  Modify, extend, and customize without restrictions or version lock-in.
                </p>
              </div>

              {/* MCP */}
              <div className="rounded-3xl border border-border bg-gradient-to-br from-surface-2 to-surface-3 p-8 transition-all duration-300 hover:border-focus/50 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <span className="text-3xl"><Server /></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-fg">MCP</h3>
                    <p className="text-fg-muted">Model Context Protocol Server</p>
                  </div>
                </div>
                <p className="text-lg text-secondary-fg leading-relaxed">
                  BaseLayer has an MCP server ready to use with your favorite AI tools like Cursor.
                </p>
              </div>


              {/* Chat Bots & AI Tools */}
              <div className="rounded-3xl border border-border bg-gradient-to-br from-surface-2 to-surface-3 p-8 transition-all duration-300 hover:border-focus/50 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <span className="text-3xl"><MessageCircle /></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-fg">Chat Bots & AI Tools</h3>
                    <p className="text-fg-muted">ChatGPT, Claude, and more</p>
                  </div>
                </div>
                <p className="text-lg text-secondary-fg leading-relaxed">
                    Designed for use with your favorite chat bots and AI tools. llms.txt and more keep your AI tools in sync with your components.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Features Section */}
        <div className="relative z-10 px-6 pb-20 md:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <span className="text-2xl"><Palette /></span>
                </div>
                <h3 className="mb-2 font-semibold text-fg text-xl">Beautiful Design</h3>
                <p className="text-fg-muted">
                  Carefully crafted components that look great out of the box with thoughtful attention to detail.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <span className="text-2xl"><Accessibility /></span>
                </div>
                <h3 className="mb-2 font-semibold text-fg text-xl">Accessible</h3>
                <p className="text-fg-muted">
                  Built on React Aria Components with full keyboard navigation and screen reader support.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <span className="text-2xl"><Github /></span>
                </div>
                <h3 className="mb-2 font-semibold text-fg text-xl">Open Source</h3>
                <p className="text-fg-muted">
                  Completely open source and free to use. MIT Licensed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 px-6 pb-20 md:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-3xl border border-border bg-gradient-to-r from-surface-2 to-surface-3 p-12">
              <h2 className="mb-4 font-bold text-3xl text-fg md:text-4xl">
                Ready to build something amazing?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-fg-muted text-lg">
                Join developers who are building the next generation of applications with BaseLayer components.
              </p>
              <Link
                href="/docs/intro"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-semibold text-lg text-primary-fg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Start Building →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
