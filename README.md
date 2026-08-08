# FinSight - AI Personal Finance Tracker

FinSight is a complete, working frontend-only web application that helps users track their personal finances with AI-powered insights, auto-categorization, and budget tracking. It uses the Gemini API for intelligence and stores all user data locally in the browser.

## Features
- **Dashboard**: High-level summary, dynamic charts (Recharts), and AI daily insights.
- **Transactions**: Add, edit, and delete transactions. Features AI auto-categorization based on descriptions.
- **Insights**: An "Ask FinSight" chat interface allowing users to ask questions about their spending, plus AI budget recommendations.
- **Settings**: Manage category budgets, clear data, or export as CSV.
- **Data Privacy**: No database needed. All data is saved securely in your browser's `localStorage`.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS, Lucide React
- **Charts**: Recharts
- **AI**: Google Gemini API (gemini-1.5-flash)
- **Data Storage**: Browser `localStorage`

## Setup Instructions

### 1. Get a Free Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Sign in with your Google account.
3. Click "Create API Key" and generate a new key.
4. Copy the API key.

### 2. Local Setup
1. Clone this repository (or copy the files).
2. Rename `.env.example` to `.env.local` and paste your API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Deploying to Vercel
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click "Add New..." -> "Project" and import your GitHub repository.
4. In the "Environment Variables" section, add:
   - Name: `GEMINI_API_KEY`
   - Value: `[your_api_key_here]`
5. Click "Deploy". Your AI-powered finance tracker will be live in minutes!

## Architecture & Data Flow
Since this is a serverless application without a database:
- **State Management**: We use React hooks to manage and synchronize data with the browser's `localStorage`.
- **Backend API**: The only backend component is a single Next.js API route (`/api/ai`). This securely calls the Gemini API on the server side so your API key is never exposed to the client. The route accepts a prompt and contextual transaction data, then returns the generated response.

- 
- live deployment : Live Deployment	(https://fin-sight-one-nu.vercel.app/)


