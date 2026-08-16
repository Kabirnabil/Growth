# GrowthOS Cloud — Setup Guide

This edition replaces the browser-only IndexedDB database with **Supabase Auth + Postgres + Realtime**.

It provides:
- Email/password sign-up and login
- Password reset and in-app password change
- Persistent cloud database
- Same account/data on laptop and phone
- Automatic cross-device refresh through Supabase Realtime
- Row Level Security so authenticated users only access their own records
- Vercel-ready static deployment
- Your Aug 16–Dec 31 roadmap
- Routine, CP, research, YouTube, habits and analytics

## 1. Create a Supabase project

1. Create/login to a Supabase account.
2. Create a new project.
3. Wait for the database to finish provisioning.

## 2. Create the database

Open **SQL Editor** in the Supabase dashboard.

Copy the full contents of:

`supabase-schema.sql`

and run it once.

This creates `public.user_records`, enables RLS, adds private per-user policies, and enables the table for Realtime.

## 3. Configure authentication

In Supabase:
- Open Authentication settings.
- Keep Email/Password enabled.
- Decide whether email confirmation should be required.
- In URL configuration, set your Site URL after deployment, e.g. `https://your-project.vercel.app`.
- Add the same Vercel URL to allowed Redirect URLs.
- During local development, also add `http://localhost:5500` or the URL your dev server uses.

## 4. Add your Supabase project values

Open `config.js`.

Replace:

```js
export const SUPABASE_URL = "https://YOUR_PROJECT_REF.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY = "YOUR_PUBLISHABLE_OR_ANON_KEY";
```

with the Project URL and publishable/anon key shown in your Supabase project API settings.

**Never put a service-role/secret key in this website.**

## 5. Run locally

Because the app uses ES modules, launch it through a local web server.

### VS Code
Install Live Server, then right-click `index.html` → **Open with Live Server**.

### Or Python
From the project folder:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

If using port 8000, add `http://localhost:8000` to Supabase Auth Redirect URLs.

## 6. Test before deploying

1. Click **Create account**.
2. Register with an email + password.
3. If email confirmation is enabled, confirm the account from the email.
4. Log in.
5. Mark a roadmap item complete.
6. Add a CP session.
7. Open the same local/deployed site in another browser/device and log in with the same account.
8. The same cloud records should load.

## 7. Deploy on Vercel

Recommended Git workflow:

1. Create a GitHub repository.
2. Upload:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `config.js`
   - `vercel.json`
   - optionally `README.md`
3. Do **not** upload `supabase-schema.sql` if you do not want your schema in the public repository; it is fine to keep locally.
4. Log in to Vercel.
5. Add New → Project.
6. Import the GitHub repository.
7. For a plain static site, no build command is needed.
8. Deploy.
9. Copy the generated Vercel domain.
10. Put that exact domain into Supabase Authentication → URL Configuration as the Site URL and an allowed Redirect URL.

After GitHub is connected to Vercel, future pushes can trigger updated deployments.

## 8. Phone use

Open the Vercel URL on your phone and log in with the same email/password. Your data comes from Supabase, so it is no longer tied to one browser's IndexedDB.

On iPhone/Android you can optionally use **Add to Home Screen** to make the site behave more like an app shortcut.

## 9. Security model

Every database row has a `user_id`.

Supabase Row Level Security policies check `auth.uid() = user_id` for SELECT/INSERT/UPDATE/DELETE.

The client only receives rows its signed-in user is authorized to access.

## 10. Automatic synchronization

The client listens to changes on `public.user_records` using Supabase Realtime Postgres Changes filtered by the logged-in user ID.

When another logged-in device writes a record, the app refreshes its cloud data automatically.

## Files

- `index.html` — application UI and login screen
- `styles.css` — complete responsive design
- `app.js` — authentication, database CRUD, realtime sync, trackers and analytics
- `config.js` — your Supabase public project configuration
- `supabase-schema.sql` — database/RLS setup
- `vercel.json` — Vercel configuration
- `README.md` — this guide
