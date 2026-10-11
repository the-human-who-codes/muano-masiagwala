# muano-masiagwala

Personal portfolio of Muano Masiagwala — Software Engineer at AWS (EC2).

**Live:** https://muano-masiagwala.vercel.app

Built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm typecheck
pnpm build
```

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
