# PRD — Kalvarayan hills in salem (Landing Page)

## Original Problem Statement
Create a landing page for 'Kalvarayan hills in salem'. Use 'Kalvarayan hills in salem' as the website name and header. In the hero section, use the title 'Build values for the Future'.

## User Choices
User skipped clarifications. Proceeded with defaults:
- Full sections (Hero, About, Attractions, Gallery, Activities, How to Reach, Contact)
- Earthy / nature-inspired editorial visual style
- Contact form with MongoDB storage

## Architecture
- **Frontend**: React + Tailwind, single page on `/`. Components in `src/components/landing/`. Fonts: Cormorant Garamond (display) + Work Sans (body). Custom palette via `tailwind.config.js` (kal.* tokens).
- **Backend**: FastAPI with `/api` prefix. Endpoints: `GET /api/`, `GET/POST /api/status`, `GET/POST /api/contact`.
- **DB**: MongoDB collection `contacts` storing {id, name, email, phone, message, created_at} (datetimes stored as ISO strings, _id excluded on read).

## Personas
- **Traveller / weekend visitor** — looking for a quiet hill station near Salem with attractions, activities, how-to-reach info, and a way to enquire.
- **Local homestay / community partner** — landing page positions Kalvarayan as a community-led tourism initiative.

## What's Implemented (Dec 2025)
- Fixed glass-morphism header with mobile menu, scroll-aware styling (Header.jsx)
- Hero with full-bleed image, slow zoom, "Build values for the Future" title, stats strip (Hero.jsx)
- About section with editorial typography + 6-stat grid (About.jsx)
- Attractions bento grid on dark forest background — 5 cards (Attractions.jsx)
- Gallery — masonry-style (Gallery.jsx)
- Activities — 6 icon cards (Activities.jsx)
- How to Reach — 3 routes timeline + OpenStreetMap embed (HowToReach.jsx)
- Contact form posting to `/api/contact` with sonner toasts (Contact.jsx)
- Footer (Footer.jsx)
- Backend `POST/GET /api/contact` with EmailStr validation
- Tested end-to-end: 100% pass on backend pytest + Playwright frontend flows

## P0 Backlog (next)
- Replace placeholder phone/email with real contact details
- Real photography from Kalvarayan (current images are Unsplash stand-ins)

## P1 Backlog
- Admin dashboard to view/manage contact submissions
- Email notification on new enquiry (Resend / SendGrid)
- Multilingual: Tamil + English toggle
- Itinerary builder / homestay listing pages

## P2 Backlog
- Blog / journal section for travel stories
- Booking calendar integration
- Analytics dashboard
