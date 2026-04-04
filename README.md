# Codexa SMARTERP Restaurant ERP System Template

A modern Angular frontend template for restaurant operations, customer engagement, campaign management, and back-office workflows.

This repository is focused on UI architecture and interaction patterns (including CSS-only modals/drawers) that can be connected to your API layer.

## Table of Contents

- Overview
- Tech Stack
- Feature Modules and Routes
- Project Structure
- Getting Started
- Scripts
- Styling and Theme System
- Modal and Drawer Interaction Pattern
- Development Notes
- Testing
- Build and Deployment
- Troubleshooting
- License

## Overview

Codexa SMARTERP Restaurant ERP System Template provides prebuilt screens and flows for:

- Dashboard and operational monitoring
- POS and order flow screens
- Kitchen board
- Reservations and booking flow
- Customer CRM views and profile panels
- Menu and supplier management
- Campaigns and campaign analytics
- Email automation settings

The current codebase is template-first:

- Static sample data in UI components
- Reusable visual patterns across modules
- Minimal TypeScript logic for rendering and navigation

## Tech Stack

- Angular 21 (standalone components)
- TypeScript 5
- Angular Router
- Tailwind CSS v4
- Flowbite
- RxJS
- Vitest (Angular unit test builder)

Runtime and tooling:

- Angular CLI: 21.2.3
- npm package manager (project configured for npm 11)

## Feature Modules and Routes

Routes are configured in `src/app/app.routes.ts`.

| Route | Module | Purpose |
| --- | --- | --- |
| `/dashboard` | Dashboard | High-level restaurant metrics and status |
| `/pos` | POS | Point of sale interface |
| `/orders` | Orders | POS order listing and management |
| `/kitchen` | Kitchen | Kitchen board view |
| `/reservation` | Reservation | Reservation list and booking flow |
| `/customers` | Customers | CRM cards, add customer modal, profile drawer |
| `/menu` | Menu | Menu items, item/category modals |
| `/suppliers` | Suppliers | Supplier table and add/edit supplier modal |
| `/campaigns` | Campaigns | Campaign listing and campaign creation modal |
| `/campaign-analytics` | Campaign Analytics | Campaign performance view |
| `/email` | Email | Email scheduler and automated message settings |

Default route:

- `/` redirects to `/dashboard`

## Project Structure

```text
Restaurant-ERP-frontend/
	angular.json
	package.json
	src/
		main.ts
		styles.css
		app/
			app.ts
			app.html
			app.routes.ts
			common/
				sidebar/
			features/
				dashboard/
				pos/
				orders/
				kitchen/
				reservation/
				customers/
				menu/
				suppliers/
				campaigns/
				campaign-analytics/
				settings/
				email/
```

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm 10+ (project currently uses npm 11)

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run start
```

Open:

- `http://localhost:4200`

### Windows PowerShell note

If PowerShell execution policies block `npm`, use:

```bash
npm.cmd run start
```

## Scripts

Available scripts from `package.json`:

- `npm run start` - start dev server (`ng serve`)
- `npm run build` - production build (`ng build`)
- `npm run watch` - development watch build
- `npm run test` - unit tests (`ng test`)

## Styling and Theme System

Global styling is configured in `src/styles.css`:

- Tailwind CSS and Flowbite imports
- Light theme overrides for utility-based templates
- Global palette remapping for background, borders, and text

Current visual system includes:

- Utility-first layout and spacing
- Component-local HTML/CSS for each feature screen
- Shared navigation shell via `src/app/common/sidebar`

## Modal and Drawer Interaction Pattern

The template uses a no-TypeScript modal/drawer interaction pattern in multiple modules.

Pattern used:

1. Hidden checkbox input holds open/close state.
2. Buttons are converted to `label` with `for="..."` to toggle state.
3. Overlay section visibility is controlled with CSS sibling selectors.
4. Backdrop, close icon, and cancel controls all point to the same toggle.

Benefits:

- Fast prototyping with minimal runtime logic
- Consistent behavior across feature pages
- Easy to swap later for signal/service-driven state if needed

## Development Notes

- Root shell is composed by `src/app/app.html` with:
	- `app-sidebar`
	- `router-outlet`
- Flowbite initialization is done in `src/app/app.ts` (`initFlowbite()` in `ngOnInit`).
- Features are currently component-driven templates; API bindings can be introduced per module.

### Adding a new feature page

```bash
ng generate component features/your-feature
```

Then:

1. Register route in `src/app/app.routes.ts`.
2. Add navigation link in `src/app/common/sidebar/sidebar.html`.
3. Create/adjust template and styles in the new feature folder.

## Testing

Run unit tests:

```bash
npm run test
```

The project is configured with Angular's unit test builder and Vitest dependencies.

## Build and Deployment

Create production build:

```bash
npm run build
```

Build output is generated under `dist/`.

Production build uses Angular optimization and output hashing settings from `angular.json`.

## Troubleshooting

- Port already in use:
	- stop conflicting process, then rerun `npm run start`
- PowerShell execution policy issues with npm:
	- use `npm.cmd run start`
	- use `npm.cmd run test`
- Missing styles/components after pulling changes:
	- run `npm install` again

## License

This template currently has no explicit license file in the repository.
Add a `LICENSE` file if you plan to distribute it publicly.
