# Academic Portfolio for Adithya Neelakantan

## Overview

This is a professional academic portfolio website built for Adithya Neelakantan, a Computer Science graduate from Syracuse University. The application showcases research interests, professional updates, and contact information in a clean, minimalist design. The portfolio features a fixed sidebar layout with a scrollable content area, implementing specific design guidelines including Helvetica typography, white background, black text, and dark pink (#A20597) hyperlinks.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (alternative to React Router)
- TailwindCSS for utility-first styling with custom design tokens

**Component Architecture**
- shadcn/ui component library with Radix UI primitives for accessible, customizable UI components
- Component composition pattern using the "new-york" style variant
- Custom CSS variables for theming defined in `client/src/index.css`
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**Design System**
- Custom color scheme with primary accent color set to dark pink (#A20597)
- Typography using Helvetica at 12px base size
- Neutral base colors (black text on white background)
- Responsive breakpoint at 768px for mobile detection
- Custom border radius values (9px, 6px, 3px)

**State Management**
- TanStack Query (React Query) for server state management and caching
- React hooks for local component state
- Custom hooks for mobile detection (`use-mobile`) and toast notifications (`use-toast`)

### Backend Architecture

**Server Framework**
- Express.js running on Node.js with ES modules
- TypeScript for type safety across the codebase
- HTTP server creation using Node's built-in `http` module

**Development Setup**
- Development mode with tsx for TypeScript execution
- Production build using esbuild for server bundling and Vite for client bundling
- Middleware for JSON parsing and URL encoding
- Request logging middleware that captures API calls and response times

**API Structure**
- Routes prefixed with `/api` for clear separation from client routes
- Modular route registration system in `server/routes.ts`
- Storage interface abstraction for future database integration

**Session Management**
- Express session configuration with connect-pg-simple for PostgreSQL session storage
- Cookie-based session handling

### Data Storage Solutions

**Database Configuration**
- Drizzle ORM configured for PostgreSQL with the Neon serverless driver
- Schema-first approach with TypeScript types generated from database schema
- Zod integration for runtime validation via drizzle-zod
- Migration support with drizzle-kit

**Current Schema**
- Users table with UUID primary keys, username, and password fields
- Schema validation using Zod for insert operations

**Storage Abstraction**
- Interface-based storage layer (`IStorage`) allowing for multiple implementations
- In-memory storage implementation (`MemStorage`) for development/testing
- CRUD methods: getUser, getUserByUsername, createUser
- UUID generation for unique identifiers using Node's crypto module

**Migration Strategy**
- Migrations output to `./migrations` directory
- Schema defined in `shared/schema.ts` for sharing between client and server
- Database credentials loaded from `DATABASE_URL` environment variable

### External Dependencies

**UI Component Libraries**
- @radix-ui/* components for accessible primitives (dialogs, dropdowns, popovers, tooltips, etc.)
- embla-carousel-react for carousel functionality
- lucide-react for icon components
- cmdk for command palette interface
- vaul for drawer components
- react-day-picker for calendar/date selection

**Form Handling**
- React Hook Form for form state management
- @hookform/resolvers for validation schema integration

**Styling & Utilities**
- class-variance-authority (cva) for variant-based component styling
- clsx and tailwind-merge for conditional class management
- date-fns for date manipulation and formatting

**Development Tools**
- @replit/vite-plugin-runtime-error-modal for error overlay in development
- @replit/vite-plugin-cartographer and dev-banner for Replit-specific features (development only)

**Database & Backend**
- @neondatabase/serverless for PostgreSQL connections
- drizzle-orm and drizzle-zod for database operations and validation
- connect-pg-simple for PostgreSQL session storage

**Build & Transpilation**
- esbuild for server-side bundling
- @vitejs/plugin-react for React Fast Refresh
- postcss with autoprefixer for CSS processing