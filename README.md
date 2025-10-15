# Appizzo Collection

Appizzo Collection is a dual-stack experience that chronicles speculative garments through a sensory, story-driven interface. The Django REST backend curates featured collections, milestones, and testimonials; the React + Vite frontend delivers immersive visuals including the interactive **Sensory Composer** for generating avant-garde wearable narratives.

## Architecture
- **Backend** Django 5 + Django REST Framework API served from `backend/`, using SQLite by default and auto-seeded capsules via `collection/signals.py` after migrations.
- **Frontend** React 18 + TypeScript + Tailwind CSS hosted in `frontend/`, bundled with Vite and animated through Framer Motion.

## Local Development
1. **Clone & env setup**
   - Python 3.11+ and Node.js 18+ recommended.
   - In project root, create a virtualenv and activate it.
2. **Backend**
   - `cd backend`
   - `pip install -r ../requirements.txt`
   - `python manage.py migrate`
   - `python manage.py runserver`
   - Admin credentials seeded: `admin` / `admin`
3. **Frontend**
   - In another terminal: `cd frontend`
   - `npm install`
   - `npm run dev`
   - Visit `http://localhost:5173` (Vite proxy to backend via `/api` prefix).

## API Reference
- **`GET /api/featured/`** curated spotlight pieces.
- **`GET /api/items/`** full catalogue ordered by `created_at`.
- **`GET /api/milestones/`** timeline entries with mood descriptors.
- **`GET /api/testimonials/`** community reflections with spotlight flag.

## Render Deployment Guide

### Backend Web Service (Django)
1. Push project to GitHub (see instructions below).
2. In Render, create a **Web Service** connected to the repo.
3. Set **Root Directory** to `backend`.
4. Environment
   - Runtime: Python 3.11+
   - Build Command: `pip install -r ../requirements.txt`
   - Start Command: `gunicorn appizzo_backend.wsgi`
   - Optional pre-deploy command (Background Worker): `python manage.py migrate`
5. Environment Variables
   - `DJANGO_SECRET_KEY` *(generate your own, Render dashboard)*
   - `DJANGO_DEBUG=0`
   - Add `ALLOWED_HOSTS` entry within `appizzo_backend/settings.py` or override via env var.
6. Configure **Auto Deploy** on the main branch.

### Frontend Static Site (Vite)
1. Add another Render service → **Static Site**.
2. Set **Root Directory** to `frontend`.
3. Build Command: `npm install && npm run build`
4. Publish Directory: `dist`
5. Add environment variable `VITE_API_BASE_URL` if you later expose a custom backend domain; update `src/api.ts` to respect it.
6. Point the static site to the backend domain via proxy rules or configure CORS on the backend.

### Optional Background Worker
- If you prefer automated migrations on each deploy, create a Render background worker with command `python manage.py migrate` operating in the `backend` directory.

## Development Features
- **SensoryComposer** interactive generator in `frontend/src/components/SensoryComposer.tsx` for bespoke fabric-light combinations.
- Tailwind design tokens defined in `frontend/tailwind.config.js` for neon-night palette.
- Auto seeding ensures consistent demo data through `post_migrate` signal.

## GitHub Push Instructions
1. Ensure git remote:
   ```bash
   git remote add origin https://github.com/Joelmaloba2541/Appizze_collection.git
   ```
   *(If `origin` exists, use `git remote set-url origin ...` instead.)*
2. Commit changes:
   ```bash
   git add .
   git commit -m "Add README and sensory composer"
   ```
3. Push branch:
   ```bash
   git push -u origin main
   ```
   Replace `main` with your current branch if different.

## License
- **Custom/Undeclared**: add a LICENSE file to clarify usage if needed.
