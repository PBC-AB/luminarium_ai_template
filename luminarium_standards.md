Stack and Technology

We will be using the following technology stack:
- **Framework:** Next.js with TypeScript for a robust and type-safe foundation.
- **Component Library:** Mantine will be used for its comprehensive set of components and hooks, leveraging its built-in styling system.
- **Styling:** CSS-in-JS with Emotion (Mantine's default) for scoped styles within components.
- **State Management:**
    - React Context API for simple, global state.
    - Zustand for more complex state management needs, offering a minimalistic API.
- **Form Handling:** Mantine's `@mantine/form` library for managing form state and validation consistently with the component library.
- **API Integration:** React Query for handling data fetching, caching, and server state synchronization.
- **Testing:** Jest and React Testing Library for unit and integration tests, focusing on user interaction patterns.
- **Linting & Formatting:** ESLint and Prettier to ensure code quality and consistent formatting.
- **Internationalization (i18n):** `next-i18next` for managing multilingual support and translations within Next.js.
- **Accessibility:** Leverage Mantine's built-in accessibility features and adhere to WCAG best practices.

Project Structure and Conventions

This template utilizes a **monorepo structure** managed with npm workspaces, containing the main application and shared local packages.

```
./
├── packages/
│   └── luminarium-core-ui/  # Core UI package (theme, layout, shared components)
├── src/                     # Main application source code
│   ├── app/                 # Next.js App Router files
│   ├── components/          # App-specific or Feature-specific components
│   │   └── ui/              # (If needed for app-specific UI primitives)
│   │   └── common/          # (If needed for app-specific common components)
│   ├── features/            # Feature modules (primary location for app code)
│   │   └── example-feature/ # Example feature implementation
│   ├── hooks/               # App-specific shared hooks
│   ├── lib/                 # App-specific shared utilities, constants, types
│   ├── providers/           # App-specific context providers (e.g., React Query)
│   └── types/               # App-specific shared TypeScript types/interfaces
├── docs/                    # Documentation (integration guides, etc.)
├── .npmrc                   # npm configuration for GitHub Packages
├── luminarium_standards.md  # This file
├── package.json             # Root package config (defines workspaces)
└── ...                      # Other config files (next.config.js, tsconfig.json, etc.)
```

The application logic resides primarily within the `src/features/` directory. The `packages/luminarium-core-ui` contains the foundational theme, layout, and potentially other shared primitive components, managed as a separate versioned package.

Conventions:
- **File Naming:** Use `PascalCase` for components and `camelCase` for hooks, utilities, and services. Use `kebab-case` for directories.
- **Component Exports:** Use named exports for components and barrel files (`index.ts`) within feature/component directories for easier importing.
- **TypeScript:** Utilize TypeScript features like interfaces and types rigorously for better code understanding and safety.

Component Library and Approach

We leverage Mantine as our primary component library, primarily through the shared `@PBC-AB/luminarium-core-ui` package and direct usage within features.

- **Core UI Package (`@PBC-AB/luminarium-core-ui`):**
    - Contains the foundational Mantine theme configuration (`theme.ts`).
    - Provides the standard `AppLayout` component.
    - May contain other shared, generic UI primitives or components intended for use across multiple Luminarium projects.
    - This package is versioned and published privately to GitHub Packages.

- **Composition over Configuration:** Prefer composing UIs from Mantine's smaller, focused components (e.g., using `Modal.Header`, `Modal.Body`, `Modal.Footer`) rather than relying on single, highly configurable components with complex props. This simplifies usage for both humans and AI agents.

- **Customization Strategy:**
    - **Core Theme Changes (Rebranding, etc.):** Major theme changes MUST be implemented by updating the `theme.ts` file *within the `@PBC-AB/luminarium-core-ui` package*, building, versioning, and publishing the package. Consuming projects then update their dependency.
    - **Application-Specific Theme Overrides:** Minor, *application-specific* theme adjustments or additions can be made by potentially creating a wrapper theme object in the main application's `src/` directory that imports and merges with the core theme from the package. (Use sparingly).
    - **One-off Adjustments:** For minor, instance-specific style tweaks, use the `sx` prop directly on the Mantine component.
    - **Avoid Complex Styling:** Discourage the use of `createStyles`, CSS Modules, or extensive custom CSS unless absolutely necessary for unique UI requirements not achievable via theme or `sx`.

- **Creating New Custom Components:**
    - **Decision:** When creating a new reusable component, decide if it belongs in the core `@PBC-AB/luminarium-core-ui` package (if generic and useful across projects) or within the application's `src/components/common/` or `src/features/[feature]/components/` (if specific to this application or feature).
    - **AI Agent Guideline:** **Crucially, if the AI agent determines a new custom component is needed, it must explicitly state its intention and reasoning, and ask for human confirmation before proceeding with the implementation.**
    - **Location:**
        - Core shared components: `packages/luminarium-core-ui/src/components/`
        - App-specific shared components: `src/components/common/`
        - Feature-specific components: `src/features/[feature]/components/`
        - App-specific UI primitives: `src/components/ui/`
    - **API Style:** New custom components should aim to follow Mantine's API conventions where applicable (e.g., prop naming for common features like `onClick`, `children`, `disabled`).

- **Component Documentation:**
    - **Requirement:** All newly created custom components **must** include a JSDoc comment block directly above the component definition.
    - **Content:** The JSDoc should include:
        - A clear description of the component's purpose.
        - Documentation for each prop using `@param {type} name - Description.`
        - A simple usage example using `@example`. 
    ```typescript
    /**
     * MyCustomButton: A button with specific branding applied.
     *
     * @param {string} variant - The style variant ('primary' | 'secondary')
     * @param {() => void} onClick - Click handler function.
     * @param {React.ReactNode} children - Button content.
     * @example
     * <MyCustomButton variant="primary" onClick={handleClick}>Submit</MyCustomButton>
     */
    const MyCustomButton = ({ variant, onClick, children }) => { ... };
    ```

Design System and Layout

This section outlines how we manage design tokens, layout structures, and responsive design, primarily leveraging the `@PBC-AB/luminarium-core-ui` package.

- **Theme Configuration (`@PBC-AB/luminarium-core-ui`):
    - **Centralized Control:** All foundational design tokens (colors, typography, spacing, radius, shadows, etc.) MUST be managed within the theme configuration file located inside the `@PBC-AB/luminarium-core-ui` package.
    - **Updates:** Core theme updates require modifying, versioning, and republishing the package.

- **Strict Token Usage:**
    - **Mandatory:** Developers and the AI agent MUST use theme tokens for all styling values (colors, spacing, font sizes, border radius, etc.). Access tokens via the `theme` object (available in `sx` prop, Mantine style props, or `useMantineTheme` hook).
    - **Forbidden:** Raw CSS values (e.g., `#ffffff`, `15px`, `2rem`) are strongly discouraged and should not be used directly in `sx` props, style props (`p`, `m`, `fz`, `color`, etc.), or custom styles. Always prefer theme references (e.g., `theme.colors.blue[6]`, `theme.spacing.md`, `theme.fontSizes.lg`).

- **Layout Components:**
    - **Recommended Usage:** Utilize Mantine's layout components for structuring UI consistently:
        - `Stack`: For vertical layouts with uniform spacing between elements.
        - `Group`: For horizontal layouts with control over alignment and spacing.
        - `Grid` & `SimpleGrid`: For 2-dimensional grid-based layouts.
        - `Container`: To constrain the maximum width of page content and apply consistent horizontal padding.
    - **Default Application Layout:** The template MUST use the standard `AppLayout` component provided by the `@PBC-AB/luminarium-core-ui` package. This component ensures a consistent page frame (header, navigation, etc.).

- **Responsive Design:**
    - **Breakpoints:** Standard responsive breakpoints MUST be defined in the theme configuration within the `@PBC-AB/luminarium-core-ui` package.
    - **Mantine Mechanisms:** Responsive styles MUST be implemented using Mantine's built-in mechanisms. This includes:
        - Responsive style object syntax (e.g., `sx={{ padding: { base: 'sm', md: 'xl' } }}`) 
        - Style props accepting responsive objects (e.g., `p={{ base: 'sm', md: 'xl' }}`)
        - Using theme functions like `theme.fn.smallerThan('sm')` or `theme.fn.largerThan('md')` within `sx` or other style logic.
    - **Forbidden:** Custom CSS media queries (`@media (...)`) should NOT be written directly. Rely solely on Mantine's responsive system. 

Documentation and Guidance

This document (`luminarium_standards.md`) serves as the single source of truth for all development standards, conventions, architectural decisions, and specific guidelines for working within this project template. It is intended for both human developers and AI agents.

- **Getting Started (`README.md`):**
    - Basic project setup (installation, dependencies) and instructions for running the development server, build process, and tests can be found in the root `README.md` file.
    - The `README.md` is kept concise and focuses only on initial setup and execution. It explicitly links to this document for all detailed development standards.

- **Component Reference & Discoverability:**
    - **Core UI Components:** Core components (Theme, AppLayout) are provided by the `@PBC-AB/luminarium-core-ui` package. Refer to the package's source or documentation for its contents.
    - **Custom App/Shared Components (`COMPONENTS.md`):** A `COMPONENTS.md` file is maintained in the root directory, listing custom shared components created specifically for *this application* within `src/components/common/` or `src/components/ui/`.
    - **Barrel Files (`index.ts`):** App-level components MUST use barrel files (`index.ts`) to export all components, allowing for easier discovery and importing.
    - **Custom Component Documentation (JSDoc):** All custom components MUST include a JSDoc block explaining their purpose, props, and usage example.

- **Example Implementation (`src/features/example-feature/`):
    - A dedicated example feature module (e.g., `src/features/example-feature/`) will be included in the template.
    - This module showcases practical application of the defined standards, including usage of the `AppLayout`, common Mantine components, form handling with `@mantine/form`, state management patterns, and adherence to styling/token conventions.
    - Files within this module (e.g., `ExamplePage.tsx`, `ExampleForm.tsx`) should contain comments clearly marking them as reference examples.
    - Developers and AI agents should refer to this example feature when implementing new features to understand the expected patterns.

- **Guidance for AI Agents:**
    - **Primary Instruction Source:** This entire document (`luminarium_standards.md`) outlines the mandatory rules, conventions, and best practices for code generation and modification within this project.
    - **Adherence Required:** Any AI agent working on this codebase MUST adhere strictly to the guidelines defined herein. This includes, but is not limited to:
        - Using the specified technology stack correctly.
        - Following the feature-based project structure and naming conventions.
        - Utilizing Mantine components and composing them as preferred.
        - Adhering strictly to the theme configuration and token usage rules.
        - Employing the defined layout components and the default `AppLayout`.
        - Implementing responsive design using Mantine's mechanisms only.
        - Following the specified procedure for creating and documenting custom components (including seeking human confirmation before creation).

Recommended Companion Technologies

While this template focuses on the Next.js/Mantine UI layer, the following technologies are the standard choices for completing the stack within Luminarium projects.

- **Backend & Authentication:**
    - **Supabase** is the standard platform for database, authentication, and other backend services. 
    - Integration should follow the guidelines provided in the dedicated Supabase integration documentation (see below).

- **AI Development:**
    - *[List your standard AI libraries/frameworks/platforms here, e.g., LangChain, specific model APIs, vector databases, etc.]*
    - Integration should follow the guidelines provided in the relevant AI technology integration documentation (see below).

- **Integration Guides:**
    - Detailed guides for integrating Supabase and standard AI technologies with this UI template structure can be found in the `/docs` directory of this repository.
    - Refer to these guides for best practices on setting up providers, hooks, and service interactions within the feature-based architecture.