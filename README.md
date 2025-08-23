# TechVenturre Portfolio Website

## Overview

This is a modern portfolio website for TechVenturre, a digital solutions company. The application showcases services, projects, testimonials, and provides a contact form for potential clients. It's built with a React frontend and Express.js backend, using PostgreSQL for data storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: MongoDB with Mongoose ODM for schema modeling and data operations
- **API Design**: RESTful API endpoints under `/api` prefix
- **Session Management**: In-memory sessions (can be upgraded to MongoDB sessions if needed)

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend application
├── shared/          # Shared TypeScript types and schemas
└── migrations/      # Database migration files
```

## Key Components

### Database Schema (shared/schema.ts)
- **Projects**: MongoDB collection storing portfolio projects with metadata, technologies, and links
- **Contact Submissions**: MongoDB collection handling contact form submissions with project requirements
- **Testimonials**: MongoDB collection for client testimonials with ratings and featured status
- **Validation**: Zod schemas ensure data integrity and type safety across frontend and backend

### Frontend Components
- **Navbar**: Responsive navigation with smooth scrolling
- **Hero**: Landing section with call-to-action buttons
- **About**: Company information and mission
- **Services**: Service offerings with technology stacks
- **Projects**: Portfolio showcase with filtering capabilities
- **Testimonials**: Client feedback display
- **Contact**: Form for project inquiries with validation
- **Footer**: Company links and additional navigation

### Backend Services
- **Storage Layer**: MongoDB abstraction with CRUD operations using Mongoose ODM
- **API Routes**: RESTful endpoints for projects, testimonials, and contact submissions
- **Development Server**: Vite integration for hot module replacement
- **Sample Data**: Pre-populated with 6 portfolio projects and 5 client testimonials

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express routes handle requests and validate data with Zod schemas
3. **Database Operations**: Mongoose ODM performs operations on MongoDB collections
4. **Response Handling**: Data is returned as JSON and cached by React Query
5. **UI Updates**: Components automatically re-render when data changes

### API Endpoints
- `GET /api/projects` - Fetch all projects
- `GET /api/projects/featured` - Fetch featured projects only
- `GET /api/testimonials` - Fetch featured testimonials
- `POST /api/contact` - Submit contact form

## External Dependencies

### Core Dependencies
- **mongodb**: MongoDB driver for Node.js
- **mongoose**: MongoDB object modeling for Node.js
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling with validation
- **zod**: Runtime type validation and schema definition

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives for complex components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Icon library with consistent design

### Development Tools
- **vite**: Fast build tool with HMR support
- **typescript**: Static type checking
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle migrations are applied via `db:push`

### Environment Variables
- `MONGODB_URI`: MongoDB connection string (required)
- `NODE_ENV`: Environment setting (development/production)

### Scripts
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build both frontend and backend for production
- `npm start`: Run production server

### Production Considerations
- Uses MongoDB Atlas for cloud database hosting
- Server serves static files from `dist/public` in production
- Session storage can be upgraded to MongoDB sessions for persistence
- Sample data includes 6 portfolio projects and 5 client testimonials