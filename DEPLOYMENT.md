# Server Deployment Guide

## Prerequisites

- Node.js 20+ (use `.nvmrc` with `nvm use`)
- PM2 (optional, for process management): `npm install -g pm2`

## Build for Production

```bash
npm install
npm run build:standalone
```

This creates `.next/standalone/` with a minimal, self-contained server bundle.

## Run the Server

### Option 1: Direct Node (development/testing)

```bash
PORT=3000 node .next/standalone/server.js
```

### Option 2: PM2 (recommended for VPS)

```bash
npm run deploy
# or manually:
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup  # enable auto-start on reboot
```

### Option 3: Docker

```bash
docker build -t glass-artist-portfolio .
docker run -p 3000:3000 glass-artist-portfolio
```

## Environment Variables

- `PORT` – Server port (default: 3000)
- `NODE_ENV` – Set to `production` in production

## Reverse Proxy (Nginx)

Example Nginx config for proxying to the app:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
