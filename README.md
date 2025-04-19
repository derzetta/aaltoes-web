# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

While this project uses React, Vite supports many popular JS frameworks. [See all the supported frameworks](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

## Deploy Your Own

Deploy your own Vite project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/vite-react&template=vite-react)

_Live Example: https://vite-react-example.vercel.app_

### Deploying From Your Terminal

You can deploy your new Vite project with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
$ vercel
```

# Project Silkway

A React application that showcases the Project Silkway initiative and collects applications.

## Database Setup with Neon

This project uses [Neon](https://neon.tech) for serverless Postgres. Follow these steps to set up your database:

1. Create an account at [neon.tech](https://neon.tech)
2. Create a new project
3. Get your connection string from the dashboard
4. Create a `.env` file in the root directory (copy from `.env.example`)
5. Add your Neon connection string to the `.env` file:
   ```
   VITE_DATABASE_URL=postgres://your-neon-connection-string-here
   ```

## Schema Setup

The database schema needs to be created before the application can store data. You can do this through the Neon SQL Editor or using Drizzle migrations.

### Using Neon SQL Editor:

Run this SQL in your Neon project's SQL Editor:

```sql
CREATE TABLE silkway_applications (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  project TEXT NOT NULL,
  about TEXT NOT NULL,
  china_interest TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

### Using Drizzle Migrations:

1. Install drizzle-kit globally:
   ```
   npm install -g drizzle-kit
   ```

2. Generate migrations:
   ```
   npx drizzle-kit generate:pg
   ```

3. Run migrations:
   ```
   npx drizzle-kit push:pg
   ```

## Development

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

## Production Build

To create a production build:

```
npm run build
```
