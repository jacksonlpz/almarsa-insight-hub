# 🚀 Vercel Deployment Guide

## Quick Deploy (5 minutes)

### Option 1: Deploy via CLI (Recommended)

```bash
# Login to Vercel (if not already logged in)
vercel login

# Deploy to preview (test first)
vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy via Git Integration

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect settings
6. Click "Deploy"

---

## 📋 Pre-Deployment Checklist

✅ **Code is ready:**
- [x] Build succeeds (`npm run build`)
- [x] No TypeScript errors
- [x] All tests pass (if testing installed)
- [x] Environment variables configured

✅ **Configuration files:**
- [x] `vercel.json` - Deployment config
- [x] `.vercelignore` - Files to ignore
- [x] `.env.example` - Environment template

✅ **Production optimizations:**
- [x] Code splitting enabled
- [x] Lazy loading implemented
- [x] Images optimized
- [x] Bundle size optimized

---

## 🔧 Vercel Configuration

### Current Settings (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### What This Does:
- **buildCommand** - Runs Vite build
- **outputDirectory** - Serves files from `dist/`
- **rewrites** - SPA routing (all routes go to index.html)

---

## 🌍 Environment Variables

### Required: NONE ✅
The app works with defaults. All API URLs and configs are set.

### Optional Environment Variables

Add these in Vercel Dashboard → Project Settings → Environment Variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_URL` | `https://api.almarsapro.com` | API base URL |
| `VITE_ENABLE_ANALYTICS` | `false` | Enable analytics |
| `VITE_ENABLE_CHAT` | `false` | Enable chat widget |

**Note:** Vite requires `VITE_` prefix for client-side variables.

---

## 📦 Deployment Process

### Step 1: Login to Vercel

```bash
vercel login
```

This opens browser for authentication.

### Step 2: Link to Existing Project (Optional)

If project already exists:

```bash
vercel link
```

Select:
- Scope: Your team/account
- Link to existing project: Yes
- Project name: `almarsa-insight-hub-main`

### Step 3: Deploy Preview

```bash
# Deploy to preview environment
vercel
```

Output:
```
🔍  Inspect: https://vercel.com/your-team/project/...
✅  Preview: https://almarsa-insight-hub-main-xxxxx.vercel.app
```

### Step 4: Test Preview

Visit the preview URL and verify:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] No console errors

### Step 5: Deploy to Production

```bash
# Deploy to production domain
vercel --prod
```

Output:
```
✅  Production: https://almarsapro.com (or your domain)
```

---

## 🔗 Custom Domain Setup

### Add Custom Domain

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add domain: `almarsapro.com`
5. Follow DNS configuration instructions

### DNS Configuration

Add these records to your domain provider:

**Option A: Use Vercel Nameservers (Recommended)**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: Use A/CNAME Records**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🚦 Deployment Status

### Check Deployment Status

```bash
# List all deployments
vercel ls

# Get deployment URL
vercel inspect
```

### View Logs

```bash
# View production logs
vercel logs

# View specific deployment logs
vercel logs [deployment-url]
```

---

## 🔄 Automatic Deployments

### Git Integration

When connected to Git:

- **Push to `main`** → Deploys to production
- **Push to `develop`** → Deploys to preview
- **Pull Requests** → Creates preview deployment
- **All branches** → Creates preview deployment

### Configuration

File: `.github/workflows/ci-cd.yml` (already created)

This runs:
1. ESLint checks
2. Tests (when dependencies installed)
3. Build verification
4. Automatic deployment

---

## 🛠️ Troubleshooting

### Build Fails

**Issue:** Build command fails
**Solution:**
```bash
# Test locally first
npm run build

# Check for errors
npm run lint
```

### Environment Variables Not Working

**Issue:** Variables not loaded
**Solution:**
- Ensure `VITE_` prefix for client variables
- Redeploy after adding variables
- Check variable spelling

### Routes Not Working (404)

**Issue:** Direct URL access returns 404
**Solution:**
- Verify `rewrites` in `vercel.json`
- Ensure SPA configuration is correct

### Build Takes Too Long

**Issue:** Deployment timeout
**Solution:**
- Check bundle size: `npm run build`
- Optimize large dependencies
- Contact Vercel support if needed

---

## 📊 Performance Optimization

### After Deployment

1. **Run Lighthouse Audit**
   ```bash
   # Install Lighthouse
   npm install -g lighthouse
   
   # Run audit
   lighthouse https://your-domain.com
   ```

2. **Check Bundle Size**
   ```bash
   npm run build
   # Review dist/ folder sizes
   ```

3. **Monitor Web Vitals**
   - Go to Vercel Dashboard → Analytics
   - Review Core Web Vitals
   - Optimize if needed

---

## 🔒 Security Checklist

Before going live:

- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Environment variables secured
- [ ] API endpoints validated
- [ ] Form submissions tested
- [ ] CORS configured correctly
- [ ] Security headers set (if needed)

---

## 📈 Post-Deployment

### 1. Verify Production

Visit your production URL and test:
- [ ] All pages accessible
- [ ] Forms working
- [ ] Images loading
- [ ] Mobile responsive
- [ ] Performance good

### 2. Set Up Monitoring

**Vercel Analytics (Free):**
- Dashboard → Analytics
- Enable Web Vitals tracking

**Error Tracking (Optional):**
```bash
npm install @sentry/react
# Configure in src/main.tsx
```

### 3. Set Up DNS

- Configure custom domain
- Set up SSL (automatic)
- Add www redirect

---

## 🎯 Deployment Commands Reference

| Command | Description |
|---------|-------------|
| `vercel` | Deploy to preview |
| `vercel --prod` | Deploy to production |
| `vercel login` | Login to Vercel |
| `vercel logout` | Logout from Vercel |
| `vercel ls` | List deployments |
| `vercel logs` | View logs |
| `vercel inspect` | Get deployment info |
| `vercel remove` | Remove deployment |
| `vercel domains` | Manage domains |
| `vercel env` | Manage environment variables |

---

## 📞 Support

### Vercel Documentation
- [Deployment Docs](https://vercel.com/docs/deployments)
- [Custom Domains](https://vercel.com/docs/custom-domains)
- [Environment Variables](https://vercel.com/docs/environment-variables)

### Project Support
- Email: info@almarsapro.com
- Check `DEVELOPER_SETUP.md` for code issues

---

## ✅ Quick Deploy Checklist

```bash
# 1. Verify build works
npm run build

# 2. Login to Vercel
vercel login

# 3. Deploy to preview (test first)
vercel

# 4. Test the preview URL thoroughly

# 5. Deploy to production
vercel --prod

# 6. Verify production deployment

# 7. Configure custom domain (optional)

# Done! 🎉
```

---

**Last Updated:** October 9, 2025  
**Status:** Ready for deployment  
**Estimated Time:** 5-10 minutes  

🚀 **Your app is production-ready!**
