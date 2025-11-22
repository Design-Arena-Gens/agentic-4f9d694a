## Hello Greeting Experience

A playful single-page experience that celebrates the universal joy of saying hello. Built with Next.js, Tailwind CSS, and a light sprinkle of animation, the site offers:

- A hero section with a warm welcome and call-to-action
- A live, time-aware greeting component running on the client
- Highlights explaining why a simple hello matters
- Open Graph metadata and assets ready for sharing

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Production Build

```bash
npm run build
npm start
```

## Deployment

The app is optimized for Vercel deployment. From the project root:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-4f9d694a
```

Ensure `$VERCEL_TOKEN` is available in your environment.
