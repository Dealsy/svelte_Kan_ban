# ClickUp Clone with SvelteKit

This project is a simplified ClickUp clone built with SvelteKit, focusing primarily on learning Svelte fundamentals.

## Tech Stack

✅ Svelte5
✅ SvelteKit (focusing on Svelte components and reactivity)
✅ TailwindCSS for styling
✅ TypeScript for type safety
✅ Local Postgres Database for data persistence
✅ Drizzle ORM for database operations

## Features We'll Build

1. **Workspace Management**
   ✅ Create workspaces
   ✅ List workspaces
   ⬜ Basic workspace settings

2. **Project Management**
   ⬜ Create projects within workspaces
   ⬜ Project views (list, board)
   ⬜ Project settings

3. **Task Management**
   ⬜ Create, edit, and delete tasks
   ⬜ Task properties (status, priority, due date)
   ⬜ Task descriptions with rich text
   ⬜ Comments on tasks

4. **Views**
   ⬜ List view
   ⬜ Board view (Kanban)
   ⬜ Calendar view (optional)

## Database Schema Overview

We'll need the following main tables:
✅ Workspaces
⬜ Projects
⬜ Tasks
⬜ Comments

## Project Structure

src/
├── lib/
│ ├── components/ # Reusable Svelte components
│ ├── server/ # Server-side code
│ │ └── db/ # Database related code
│ └── utils/ # Utility functions
├── routes/ # SvelteKit routes
└── styles/ # Global styles

## Development Phases

1. **Phase 1: Workspace Management**
   ✅ Project setup with SvelteKit
   ✅ Database setup with Drizzle
   ✅ Workspace CRUD operations (Create, Read)
   ⬜ Workspace CRUD operations (Update, Delete)
   ✅ Workspace listing and navigation

2. **Phase 2: Project Management**
   ⬜ Project CRUD operations
   ⬜ Project views
   ⬜ Project navigation

3. **Phase 3: Task Management**
   ⬜ Task CRUD operations
   ⬜ Task properties and assignments
   ⬜ Comments system

4. **Phase 4: Views & UI Enhancement**
   ⬜ List view implementation
   ⬜ Board view implementation
   ⬜ UI polish and responsiveness

## Getting Started

✅ Clone the repository
✅ Install dependencies
✅ Set up local Postgres database
✅ Configure environment variables
✅ Run migrations
✅ Start development server
