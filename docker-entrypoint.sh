#!/bin/sh
set -e

if [ -n "$DATABASE_URL" ]; then
  echo "==> Running prisma migrate deploy"
  # .bin/prisma é um shell script (não JS), então chamamos o entry JS direto via node
  node node_modules/prisma/build/index.js migrate deploy
else
  echo "==> DATABASE_URL not set; skipping migrations"
fi

echo "==> Starting Next.js server on port ${PORT:-3000}"
exec node server.js
