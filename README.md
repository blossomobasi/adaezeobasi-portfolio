# Adaeze Obasi — Data Analyst Portfolio

Built with Next.js 14, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalising

- **Personal details** (email, phone, socials, photo, resume, location): `src/data/profile.ts`. Anything left empty is hidden on the site.
- **Projects**: `src/data/projects.ts`. Add screenshots to `public/images`.
- **Tools / skills**: `src/data/techStack.ts`.
- **Contact form**: copy `.env.example` to `.env.local` and add EmailJS keys. Without them the form opens the visitor's mail client.

See `README.Docker.md` to run with Docker.
