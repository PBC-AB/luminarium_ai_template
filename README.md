# Luminarium UI Template

This is an AI-friendly UI template based on Next.js, TypeScript, and Mantine, designed to streamline development by providing pre-defined standards and structure.

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
    **Note:** This project uses a private core UI package (`@PBC-AB/luminarium-core-ui`) hosted on GitHub Packages. 
    - Ensure the `.npmrc` file is present in the project root.
    - You must have a GitHub Personal Access Token (PAT) with `read:packages` scope for the `PBC-AB` organization.
    - Export this token as the `NODE_AUTH_TOKEN` environment variable in your local shell environment (e.g., in your `.zshrc`, `.bashrc`, or via a tool like Doppler) before running `npm install`.
    ```bash
    export NODE_AUTH_TOKEN=YOUR_GITHUB_PAT
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result (currently showing the example page).

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Runs ESLint to check for code style issues.

## Development Standards & Guidance

**All development standards, conventions, component usage guidelines, architectural decisions, and specific instructions for AI agents are documented in `luminarium_standards.md`.**

Please refer to this file for detailed guidance *before* making changes or instructing an AI agent.

---

*This template was initialized using `create-next-app`.*
