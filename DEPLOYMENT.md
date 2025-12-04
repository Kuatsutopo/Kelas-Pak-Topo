# Deployment Guide

## 🚀 Deployment Platforms

### 1. Vercel (Recommended)

#### Automatic Deployment
1. **Connect Repository**:
   ```bash
   # Push to GitHub
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Buka [vercel.com](https://vercel.com)
   - Import repository GitHub
   - Vercel akan otomatis mendeteksi Next.js
   - Set environment variables

3. **Environment Variables**:
   ```
   DATABASE_URL=postgresql://user:password@host:port/database
   GOOGLE_SHEETS_URL=https://docs.google.com/spreadsheets/d/e/[ID]/pub?output=csv
   NEXTAUTH_URL=https://your-domain.vercel.app
   NEXTAUTH_SECRET=your-secret-key
   ```

#### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 2. Netlify

#### Build Settings
```toml
[build.environment]
  NODE_VERSION = "18"

[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

#### Environment Variables
```bash
# Netlify CLI
netlify env:set DATABASE_URL "your-database-url"
netlify env:set GOOGLE_SHEETS_URL "your-sheets-url"
netlify env:set NEXTAUTH_SECRET "your-secret"
```

### 3. Railway

#### Railway.toml
```toml
[build]
  builder = "NIXPACKS"

[deploy]
  startCommand = "npm start"
  restartPolicyType = "ON_FAILURE"
  restartPolicyMaxRetries = 10

[env]
  NODE_ENV = "production"
```

#### Deployment Commands
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### 4. Docker Deployment

#### Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
      - GOOGLE_SHEETS_URL=${GOOGLE_SHEETS_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## 🔧 Environment Configuration

### Required Environment Variables
```bash
# Database
DATABASE_URL="file:./dev.db"  # SQLite for development
# DATABASE_URL="postgresql://..." # PostgreSQL for production

# Google Sheets Integration
GOOGLE_SHEETS_URL="https://docs.google.com/spreadsheets/d/e/[ID]/pub?output=csv"

# Authentication (NextAuth)
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-256-bit-secret"

# Optional
NODE_ENV="production"
```

### Database Setup for Production

#### PostgreSQL (Recommended)
```bash
# Setup Prisma with PostgreSQL
npx prisma db push
npx prisma generate
npx prisma db seed
```

#### SQLite (Simple)
```bash
# For simple deployments
DATABASE_URL="file:./production.db"
```

## 📋 Pre-Deployment Checklist

### Code Quality
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - successful build
- [ ] Test all API endpoints
- [ ] Verify responsive design
- [ ] Check console for errors

### Security
- [ ] Set strong NEXTAUTH_SECRET
- [ ] Use HTTPS in production
- [ ] Validate all user inputs
- [ ] Implement rate limiting
- [ ] Set proper CORS headers

### Performance
- [ ] Optimize images
- [ ] Enable caching
- [ ] Minimize bundle size
- [ ] Use CDN for static assets

### Environment
- [ ] Set all required environment variables
- [ ] Configure database connection
- [ ] Set up backup strategy
- [ ] Configure monitoring

## 🚨 Common Deployment Issues

### Build Errors
1. **TypeScript Errors**:
   ```bash
   npm run build
   # Fix any type errors before deployment
   ```

2. **Memory Issues**:
   ```bash
   # Increase Node.js memory
   export NODE_OPTIONS="--max-old-space-size=4096"
   npm run build
   ```

### Runtime Errors
1. **Database Connection**:
   - Verify DATABASE_URL format
   - Check database accessibility
   - Ensure proper SSL settings

2. **Environment Variables**:
   - Double-check variable names
   - Verify no trailing spaces
   - Use platform-specific format

### Performance Issues
1. **Slow API Response**:
   - Add database indexes
   - Implement caching
   - Use CDN for static assets

2. **High Memory Usage**:
   - Optimize images
   - Use lazy loading
   - Implement pagination

## 🔄 CI/CD Pipeline

### GitHub Actions
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
      env:
        DATABASE_URL: ${{ secrets.DATABASE_URL }}
        GOOGLE_SHEETS_URL: ${{ secrets.GOOGLE_SHEETS_URL }}
        NEXTAUTH_SECRET: ${{ secrets.NEXTAUTH_SECRET }}
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## 📊 Monitoring & Maintenance

### Health Checks
```javascript
// /api/health/route.ts
export async function GET() {
  try {
    // Check database connection
    await db.administrasi.count()
    
    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    })
  } catch (error) {
    return NextResponse.json(
      { status: 'unhealthy', error: error.message },
      { status: 503 }
    )
  }
}
```

### Error Tracking
- Implement logging
- Set up error monitoring (Sentry, LogRocket)
- Monitor API response times
- Track user interactions

### Backup Strategy
- Daily database backups
- Version control for code
- Asset backup for user uploads
- Recovery procedures

---

**Note**: Always test deployment in staging environment before going to production!