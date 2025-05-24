# Contributing Guide

Thank you for your interest in helping improve **ResumeLM**! This project is under active development and we welcome community contributions.

## Building the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/olyaiy/resume-lm.git
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```
3. **Configure environment variables**
   Copy `.env.example` to `.env.local` and fill in the required values.
4. **Set up the database**
   Follow the steps in [`README.md`](README.md#-getting-started) to create the required tables in your Supabase project.
5. **Run the linter and build**
   ```bash
   npm run lint
   npm run build
   # or
   pnpm lint && pnpm build
   ```
6. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

## Submitting Issues

- Search existing issues to avoid duplicates.
- Provide a clear description of the problem or request, including steps to reproduce, expected behavior and screenshots if applicable.
- Include information about your environment (OS, browser, Node.js version).

## Opening Pull Requests

1. Create a new branch for your work.
2. Make small, focused commits with clear messages.
3. Run `npm run lint` and `npm run build` before opening the PR to ensure your changes pass linting and build successfully.
4. Open a pull request against the `main` branch and describe your changes.
5. Link to any related issues in the PR description.

Thank you for contributing!
