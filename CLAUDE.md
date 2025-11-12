# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nano Banana is a Next.js 16 application for AI-powered image editing with text prompts. It's built with TypeScript and uses shadcn/ui components with Tailwind CSS for styling.

## Development Commands

- **Development server**: `pnpm run dev`
- **Build for production**: `pnpm run build`
- **Linting**: `pnpm run lint`
- **Start production server**: `pnpm run start`

## Architecture

### Core Structure
- **Next.js App Router**: Uses the `app/` directory structure
- **Single page application**: Main page (`app/page.tsx`) renders component sections sequentially
- **Component-based**: Each section is a separate component (Header, HeroSection, EditorSection, etc.)

### Key Directories
- `app/`: Next.js app router pages and layout
- `components/`: Main application components and sections
- `components/ui/`: shadcn/ui components (56 components)
- `hooks/`: Custom React hooks (use-toast, use-mobile)
- `lib/`: Utility functions (cn function for className merging)
- `styles/`: Global CSS with custom banana-themed color variables

### Design System
- **UI Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS v4 with custom banana-themed color palette
- **Theme**: Custom CSS variables for banana colors (`--banana-primary`, `--banana-secondary`)
- **Icons**: Lucide React icons

### State Management
- **Client components**: Uses React hooks for local state
- **Form handling**: React Hook Form with Zod validation
- **Toast notifications**: Custom toast hook implementation

### Tech Stack
- Next.js 16 with React 19
- TypeScript with strict configuration
- Tailwind CSS v4 with custom color scheme
- pnpm for package management
- Vercel Analytics integration

## Component Pattern

Components follow a clear pattern:
- Main sections: `components/*.tsx` (e.g., `header.tsx`, `editor-section.tsx`)
- UI primitives: `components/ui/*.tsx` (shadcn/ui components)
- Custom hooks: `hooks/*.ts`

## Path Aliases

Use the configured path aliases:
- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/hooks` → `./hooks`
- `@/components/ui` → `./components/ui`