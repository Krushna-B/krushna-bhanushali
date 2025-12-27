# Portfolio

My personal portfolio showcasing projects and experience.

**[View Live →](https://krushna-bhanushali.vercel.app/)**

## Tech Stack

- **Framework** - Next.js 16
- **Styling** - Tailwind CSS
- **Language** - TypeScript
- **Deployment** - Vercel

## Getting Started
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── TechStack.tsx
    ├── Experience.tsx
    ├── Projects.tsx
    └── Contact.tsx

public/
└── projects/       # Project images
```

## Adding Projects

Edit `src/components/Projects.tsx`:
```tsx
{
  title: 'Project Name',
  description: 'What it does...',
  tags: ['React', 'Node'],
  image: '/projects/project-name.jpg',
  githubUrl: 'https://github.com/...',
}
```

Add images to `public/projects/`.
