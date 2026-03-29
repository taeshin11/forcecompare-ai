#!/bin/bash
set -e

echo "ForceCompare AI — Initializing..."

# Install dependencies
npm install

# Create env file if not exists
if [ ! -f .env.local ]; then
  cp .env.example .env.local
  echo "Created .env.local — update NEXT_PUBLIC_SHEETS_WEBHOOK_URL with your Google Apps Script URL"
fi

# Start dev server
npm run dev
