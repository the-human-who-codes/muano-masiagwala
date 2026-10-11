# muano-masiagwala

Personal portfolio of Muano Masiagwala — Software Engineer at AWS (EC2).

**Live:** https://muano-masiagwala.vercel.app

Built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Local development

### Prerequisites

- **Node.js 18.18 or later** (20 LTS recommended) — check with `node -v`
- **pnpm 9** — the repo uses a pnpm lockfile. The easiest way to get it is Corepack, which ships with Node:

  ```bash
  corepack enable
  corepack prepare pnpm@9 --activate
  ```

  Or install it globally with `npm install -g pnpm@9`.
- **Google Chrome** — only needed to regenerate the resume PDF.

### 1. Clone and install

```bash
git clone https://github.com/the-human-who-codes/muano-masiagwala.git
cd muano-masiagwala
pnpm install
```

### 2. Run the dev server

```bash
pnpm dev
```

Open http://localhost:3000. Changes to components and `data/` files reload automatically.

To use a different port: `pnpm dev -p 3001`.

### 3. Check your changes

```bash
pnpm typecheck   # TypeScript type check
pnpm build       # production build (also fails on type errors)
```

### 4. Preview the production build

```bash
pnpm build
pnpm start       # serves the production build on http://localhost:3000
```

This matches what Vercel serves, so it's the best check before pushing.

### Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the dev server with hot reload |
| `pnpm build` | Create an optimised production build in `.next/` |
| `pnpm start` | Serve the production build (run `pnpm build` first) |
| `pnpm typecheck` | Run the TypeScript compiler without emitting files |
| `pnpm resume` | Regenerate `public/resume.pdf` from `resume/resume.html` |

### Troubleshooting

- **`Port 3000 is in use`** — another process is using the port. Stop it, or run on another port with `pnpm dev -p 3001`.
- **Odd build errors after pulling changes** — delete the build cache and reinstall: `rm -rf .next node_modules && pnpm install`.
- **`pnpm: command not found`** — run `corepack enable` (see Prerequisites).
- **`pnpm resume` fails on Windows/Linux** — the script uses the macOS Chrome path. Run Chrome directly instead:

  ```bash
  google-chrome --headless=new --no-pdf-header-footer --print-to-pdf=public/resume.pdf resume/resume.html
  ```

## Deployment

Pushing to `main` deploys to production on Vercel. Pull requests get their own preview deployment.

## Updating content

All content lives in `data/` — no component changes needed for routine updates:

| File | Content |
| --- | --- |
| `data/author.ts` | Name, title, contact details |
| `data/about.ts` | About Me paragraphs |
| `data/experience.ts` | Work experience timeline |
| `data/projects.ts` | Project cards |
| `data/skills.ts` | Tech stack (logos in `public/tech/`, from [devicon](https://devicon.dev)) |
| `data/education.ts`, `data/certifications.ts` | Education & certifications |

### Resume

Edit `resume/resume.html`, then run `pnpm resume` (requires Google Chrome) to regenerate `public/resume.pdf`.
