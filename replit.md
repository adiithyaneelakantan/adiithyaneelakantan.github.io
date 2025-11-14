# Academic Research Portfolio

## Overview

This is a professional academic portfolio website for Adithya Neelakantan, a Computer Science graduate from Syracuse University. The project is designed as a dual-purpose application:

1. **Static Portfolio Site**: A traditional static HTML/CSS/JS website deployable to GitHub Pages, featuring a fixed navigation bar, two-column layout with sidebar, and sections for research, publications, and projects.

2. **Full-Stack Web Application**: A React-based single-page application with Express backend, utilizing modern tooling (Vite, TypeScript, TailwindCSS) and the shadcn/ui component library for potential future enhancements.

The static site (index.html) showcases research in AI agents, machine learning, NLP, and computer vision with a clean, accessible design prioritizing academic aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Dual Architecture Pattern

**Problem**: The repository contains both a static portfolio site and a full-stack application framework.

**Solution**: Maintain parallel architectures where the static site (index.html, css/, js/) operates independently for GitHub Pages deployment, while the React application (client/, server/) provides a foundation for future interactive features.

**Rationale**: This approach allows immediate deployment as a static site while preserving the ability to evolve into a dynamic web application with database-backed features.

### Frontend Architecture

**Static Site Design**
- Pure HTML/CSS/JavaScript implementation in root directory
- Fixed navigation bar with Resume link
- Two-column layout: 30% fixed sidebar (profile, contact) + 70% scrollable content
- Responsive breakpoints for mobile/tablet/desktop
- Accessibility features: WCAG compliance, keyboard navigation, ARIA labels
- Design tokens: Helvetica typography, 12px base font, dark pink (#A20597) accents on white background

**React Application Stack**
- **Framework**: React 18 with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter (lightweight alternative to React Router)
- **Styling**: TailwindCSS with custom design system
- **Component Library**: shadcn/ui built on Radix UI primitives
- **State Management**: TanStack Query for server state, React hooks for local state

**Design System Configuration**
- Custom color palette with CSS variables in HSL format
- Primary accent: `--primary: 308 96% 32%` (dark pink)
- "New York" component style variant
- Custom border radius values (9px/6px/3px)
- Mobile breakpoint at 768px
- Elevation system with shadow utilities

### Backend Architecture

**Server Framework**
- Express.js with TypeScript and ES modules
- HTTP server for handling API requests and serving static assets
- Middleware stack: JSON parsing, URL encoding, request logging

**Request Logging**
- Custom middleware capturing API calls with timestamps
- Performance tracking (response duration)
- JSON response logging with 80-character truncation

**Development vs Production**
- Development: tsx for TypeScript execution with Vite middleware
- Production: esbuild bundled server + Vite static build
- Environment-aware configuration via NODE_ENV

**Storage Interface**
- Abstract IStorage interface for future database integration
- In-memory implementation (MemStorage) for development
- User CRUD operations with UUID generation
- Designed for easy migration to database backend

### Database Schema Design

**ORM**: Drizzle ORM configured for PostgreSQL

**Schema Definition** (shared/schema.ts):
- Users table with UUID primary keys
- Zod schema validation for type-safe inserts
- TypeScript inference for select/insert types

**Migration Strategy**:
- Drizzle Kit for schema management
- Migration files in ./migrations directory
- Push-based deployment via `db:push` script

**Note**: Database is currently configured but not actively used. The application uses in-memory storage, with database integration available when needed.

### Asset Management

**Static Assets**:
- Profile photos in /assets directory (square format, 500x500px+)
- PDF documents in /pdfs (resume, research reports)
- Fallback placeholder for missing profile photo (initials display)

**Attached Assets**:
- Development artifacts and design guidelines in /attached_assets
- Path alias: `@assets` pointing to attached_assets directory

### Build and Deployment

**Development Build**:
1. Vite dev server for client with HMR
2. tsx for TypeScript server execution
3. Replit-specific plugins (cartographer, dev banner, error overlay)

**Production Build**:
1. Vite builds client to dist/public
2. esbuild bundles server to dist/index.js
3. Platform: Node.js with external packages
4. Format: ES modules

**Static Site Deployment**:
- GitHub Pages compatible (no build step required)
- Option 1: Deploy from repository (username.github.io/repo-name)
- Option 2: Personal site (username.github.io)

## External Dependencies

### UI Component Libraries

- **Radix UI**: Comprehensive suite of unstyled, accessible component primitives
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu
  - Form controls: Select, Radio Group, Switch, Slider
  - Overlays: Popover, Tooltip, Hover Card, Context Menu
  - Navigation: Menubar, Navigation Menu, Tabs
  - Layout: Scroll Area, Separator, Collapsible

- **shadcn/ui**: Pre-styled components built on Radix UI
  - Configuration in components.json
  - "New York" style variant
  - Path aliases for clean imports

### Form and Data Management

- **React Hook Form**: Form state management with `@hookform/resolvers`
- **Zod**: Schema validation and TypeScript type inference
- **TanStack Query**: Server state management, caching, and synchronization
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### Styling and Icons

- **TailwindCSS**: Utility-first CSS framework with PostCSS
- **Autoprefixer**: CSS vendor prefixing
- **class-variance-authority**: Type-safe variant styling
- **tailwind-merge**: Intelligent class merging via clsx
- **Lucide React**: Icon library
- **Heroicons**: CDN-loaded icons for static site

### Utility Libraries

- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **embla-carousel-react**: Carousel/slider component
- **cmdk**: Command palette component
- **vaul**: Drawer component primitive
- **input-otp**: OTP input component
- **react-day-picker**: Date picker component
- **recharts**: Charting library

### Database and Backend

- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **@neondatabase/serverless**: Neon serverless Postgres driver
- **connect-pg-simple**: PostgreSQL session store for Express
- **pg**: PostgreSQL client library

### Development Tools

- **Vite**: Build tool with plugins:
  - @vitejs/plugin-react: React Fast Refresh
  - @replit/vite-plugin-runtime-error-modal: Error overlay
  - @replit/vite-plugin-cartographer: Development tooling (Replit-specific)
  - @replit/vite-plugin-dev-banner: Development banner

- **TypeScript**: Static type checking with strict mode
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling
- **drizzle-kit**: Database migration tooling

### Session Management

- **express-session**: Session middleware for Express
- **connect-pg-simple**: PostgreSQL-backed session storage

### Deployment Platform

- **GitHub Pages**: Static site hosting (primary deployment target)
- **Replit**: Development environment with custom plugins