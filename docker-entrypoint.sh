#!/bin/sh
set -e

if [ -n "$DATABASE_URL" ]; then
  echo "==> Running prisma migrate deploy"
  node node_modules/.bin/prisma migrate deploy
else
  echo "==> DATABASE_URL not set; skipping migrations"
fi

echo "==> Starting Next.js server on port ${PORT:-3000}"
exec node server.js
