# Roamly
A full-stack property rental app built with Next.js. Users can list properties, search and filter rentals, make bookings, leave reviews, manage favorites, and pay through Stripe.

## Features

- Authentication and user management via Clerk
- Create and edit user profiles
- List, edit, and manage rental properties
- Category browsing
- Search across property listings
- Property detail pages with map, amenities, and reviews
- Date range booking with availability blocking
- Favorites list
- Ratings and reviews
- Stripe embedded checkout for payments
- Admin dashboard with stats and charts
- Image uploads via Supabase Storage
- Dark mode
- Fully responsive

## Tech Stack

- **Framework:** Next.js (App Router, SSR)
- **Auth:** Clerk
- **Database:** PostgreSQL via Supabase + Prisma ORM
- **Storage:** Supabase Storage
- **Payments:** Stripe
- **UI:** Tailwind CSS, shadcn/ui, Radix UI
- **State:** Zustand
- **Maps:** React Leaflet
- **Validation:** Zod


## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env` file in the root with the following:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/profile/create
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/profile/create

# Database
DATABASE_URL=
DIRECT_URL=

# Supabase
SUPABASE_URL=
SUPABASE_KEY=

# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# App
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000
ADMIN_USER_ID=
```

### 3. Push the database schema

```bash
npx prisma db push
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
