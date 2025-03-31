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

We will adopt a **feature-based directory structure**. This means grouping related components, hooks, utilities, pages/routes, and potentially tests by feature or domain. This approach aims to enhance modularity, navigability, and maintainability as the codebase grows.

Example structure:

```
src/
├── app/                 # Next.js App Router specific files (layout, page, loading, etc.)
├── components/          # Shared, reusable components (e.g., Button, Layout elements)
│   └── ui/              # Generic UI Primitives
│   └── common/          # Common composite components used across features
├── features/            # Feature-specific modules
│   └── authentication/
│   │   ├── components/  # Components specific to authentication
│   │   ├── hooks/       # Hooks specific to authentication
│   │   ├── services/    # API calls related to authentication
│   │   ├── utils/       # Utilities specific to authentication
│   │   └── index.ts     # Barrel file for the feature
│   └── user-profile/
│       └── ...          # Similar structure for user profile feature
├── hooks/               # Shared hooks used across multiple features
├── lib/                 # Shared utilities, constants, types, etc.
├── providers/           # Context providers (Theme, Auth, QueryClient)
├── styles/              # Global styles, theme overrides
└── types/               # Shared TypeScript types/interfaces
```

Conventions:
- **File Naming:** Use `PascalCase` for components and `camelCase` for hooks, utilities, and services. Use `kebab-case` for directories.
- **Component Exports:** Use named exports for components and barrel files (`index.ts`) within feature/component directories for easier importing.
- **TypeScript:** Utilize TypeScript features like interfaces and types rigorously for better code understanding and safety.

Component Library and Approach

We leverage Mantine as our primary component library. The goal is to use its components effectively to build consistent UIs while minimizing custom code and ensuring AI agent compatibility.

- **Composition over Configuration:** Prefer composing UIs from Mantine's smaller, focused components (e.g., using `Modal.Header`, `Modal.Body`, `Modal.Footer`) rather than relying on single, highly configurable components with complex props. This simplifies usage for both humans and AI agents.

- **Customization Strategy:**
    - **Theme Overrides:** For global style changes (e.g., default button appearance, color palette), use the Mantine theme object (`src/styles/theme.ts` or similar). This ensures consistency across the application.
    - **One-off Adjustments:** For minor, instance-specific style tweaks, use the `sx` prop directly on the Mantine component.
    - **Avoid Complex Styling:** Discourage the use of `createStyles`, CSS Modules, or extensive custom CSS unless absolutely necessary for unique UI requirements not achievable via theme or `sx`.

- **Creating New Custom Components:**
    - **Necessity:** Only create new custom components when Mantine does not offer a suitable primitive or composite component for the required functionality or appearance.
    - **AI Agent Guideline:** **Crucially, if the AI agent determines a new custom component is needed, it must explicitly state its intention and reasoning, and ask for human confirmation before proceeding with the implementation.**
    - **Location:**
        - Shared reusable components: `src/components/common/`
        - Feature-specific components: `src/features/[feature]/components/`
        - Generic UI primitives (if any): `src/components/ui/`
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

This section outlines how we manage design tokens, layout structures, and responsive design using Mantine.

- **Theme Configuration (`styles/theme.ts`):
    - **Centralized Control:** All design tokens (colors, typography, spacing, radius, shadows, etc.) MUST be managed within the central Mantine theme configuration file (e.g., `src/styles/theme.ts`).
    - **Initial Setup:** The template will start with Mantine's default theme settings, but key aspects like `primaryColor`, `fontFamily`, and the `spacing` scale will be explicitly defined.
    - **Customization:** As the project evolves, further customizations (e.g., custom colors, radii, heading styles) should be added to this central theme object, not implemented as one-offs in components.

- **Strict Token Usage:**
    - **Mandatory:** Developers and the AI agent MUST use theme tokens for all styling values (colors, spacing, font sizes, border radius, etc.). Access tokens via the `theme` object (available in `sx` prop, Mantine style props, or `useMantineTheme` hook).
    - **Forbidden:** Raw CSS values (e.g., `#ffffff`, `15px`, `2rem`) are strongly discouraged and should not be used directly in `sx` props, style props (`p`, `m`, `fz`, `color`, etc.), or custom styles. Always prefer theme references (e.g., `theme.colors.blue[6]`, `theme.spacing.md`, `theme.fontSizes.lg`).

- **Layout Components:**
    - **Recommended Usage:** Utilize Mantine's layout components for structuring UI consistently:
        - `Stack`: For vertical layouts with uniform spacing between elements.
        - `Group`: For horizontal layouts with control over alignment and spacing.
        - `Grid` & `SimpleGrid`: For 2-dimensional grid-based layouts.
        - `Container`: To constrain the maximum width of page content and apply consistent horizontal padding.
    - **Default Application Layout:** The template MUST include a default `AppLayout` component (likely located in `src/components/common/AppLayout/` or `src/layouts/`) built using Mantine's `AppShell` or a similar composition. This component provides the standard page structure (e.g., header, navigation, main content area) and ensures all pages generated have a consistent frame. New pages created by the AI must utilize this `AppLayout`.

- **Responsive Design:**
    - **Breakpoints:** Standard responsive breakpoints MUST be defined in the theme configuration (`theme.breakpoints`). We will start with Mantine's defaults.
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
    - **Custom Shared Components (`COMPONENTS.md`):** A `COMPONENTS.md` file will be maintained in the root directory, listing all custom shared components created within `src/components/common/` or `src/components/ui/`. It should briefly describe the purpose of each component and link to its source file.
    - **Barrel Files (`index.ts`):** Shared component directories (`src/components/common/`, `src/components/ui/`) MUST use barrel files (`index.ts`) to export all components, allowing for easier discovery and importing.
    - **Custom Component Documentation (JSDoc):** As previously stated, all custom components MUST include a JSDoc block explaining their purpose, props, and usage example.

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