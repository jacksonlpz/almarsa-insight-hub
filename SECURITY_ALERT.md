# 🚨 SECURITY ALERT: Exposed API Key Detected and Removed

## What Happened

A Google Maps API key was accidentally committed to the git repository in the `.env` file:
- **File**: `.env`
- **Key**: `AIzaSyAk8-PzRaawvv6PaJtdUq0YxRoTNuzlUT8`
- **First Committed**: Initial commit (15a2ef9)
- **Status**: ⚠️ **EXPOSED IN PUBLIC REPOSITORY**

## Immediate Actions Taken

✅ **Completed:**
1. Added `.env` to `.gitignore` to prevent future commits
2. Removed `.env` from git tracking
3. **Deleted `.env` file completely from the repository**
4. `.env.example` remains as template (no secrets)

## 🔴 CRITICAL: Actions You Must Take Immediately

### 1. Revoke the Exposed Google Maps API Key

**Go to Google Cloud Console and revoke this key NOW:**

1. Visit: https://console.cloud.google.com/google/maps-apis/credentials
2. Find the key: `AIzaSyAk8-PzRaawvv6PaJtdUq0YxRoTNuzlUT8`
3. Click on the key name
4. Click **"Regenerate Key"** or **"Delete Key"**
5. Confirm the action

**Why this is critical:** Anyone with access to this repository can use your API key, potentially causing:
- Unauthorized API usage
- Unexpected charges on your Google Cloud account
- Quota exhaustion
- Service abuse

### 2. Generate a New API Key

1. In Google Cloud Console, create a new API key
2. **IMPORTANT:** Add proper restrictions:
   - **Application restrictions:** Set HTTP referrer restrictions
     - Add your production domain: `*.almarsapro.com/*`
     - Add localhost for development: `localhost:*`
   - **API restrictions:** Restrict to only the APIs you need
     - Maps JavaScript API
     - Places API (if needed)
     - Geocoding API (if needed)

### 3. Create Your Local Environment File

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```
2. Edit your new `.env` file and add your new API key:
   ```bash
   VITE_GOOGLE_MAPS_API_KEY=your_new_api_key_here
   ```
3. **Never commit this file to git** (it's in `.gitignore`)

### 4. Share Key with Team Securely

**Do NOT share API keys via:**
- ❌ Email
- ❌ Slack/Discord
- ❌ Git commits
- ❌ Screenshots

**Instead, use:**
- ✅ Password managers (1Password, LastPass, Bitwarden)
- ✅ Secret management services (AWS Secrets Manager, HashiCorp Vault)
- ✅ Encrypted channels
- ✅ In-person/secure video call

## Best Practices Moving Forward

### 1. Environment Variable Management

**Local Development:**
- Keep `.env` file locally only
- Never commit to git
- Each developer maintains their own `.env` file

**Production/Staging:**
- Use environment variables in your hosting platform:
  - **Vercel**: Project Settings → Environment Variables
  - **Netlify**: Site Settings → Environment Variables
  - **Docker**: Pass via `-e` flag or docker-compose
  - **AWS/Azure/GCP**: Use their secret management services

### 2. Git Security Checklist

Before committing, always check:
```bash
# Check what you're about to commit
git status
git diff

# Never commit these files
.env
.env.local
.env.*.local
*.key
*.pem
credentials.json
secrets.yaml
```

### 3. Use Git Hooks (Optional but Recommended)

Install a pre-commit hook to prevent committing secrets:
```bash
# Install git-secrets
npm install -g git-secrets

# Set up in your repo
git secrets --install
git secrets --register-aws
git secrets --add 'AIza[0-9A-Za-z-_]{35}'
```

### 4. Scan Repository for Secrets (Recommended)

Use tools like:
- **TruffleHog**: `trufflesecurity/trufflehog`
- **GitGuardian**: https://www.gitguardian.com/
- **Gitleaks**: https://github.com/gitleaks/gitleaks

## Emergency Checklist

- [ ] Revoked exposed Google Maps API key in Google Cloud Console
- [ ] Generated new API key with proper restrictions
- [ ] Updated local `.env` file with new key
- [ ] Verified `.env` is in `.gitignore`
- [ ] Confirmed application still works with new key
- [ ] Shared new key securely with team members (if applicable)
- [ ] Set up monitoring/alerts for unusual API usage
- [ ] Consider implementing API key rotation policy

## Questions?

If you have questions about this security incident or need help:
1. Check your Google Cloud Console billing page for any unusual charges
2. Review API usage metrics
3. Consider implementing rate limiting if not already in place

## Additional Resources

- [Google Maps API Best Practices](https://developers.google.com/maps/api-security-best-practices)
- [Google Cloud API Key Security](https://cloud.google.com/docs/authentication/api-keys)
- [OWASP API Security](https://owasp.org/www-project-api-security/)

---

**Date Detected**: 2025-11-06
**Severity**: HIGH
**Status**: Mitigated (pending key revocation by owner)
