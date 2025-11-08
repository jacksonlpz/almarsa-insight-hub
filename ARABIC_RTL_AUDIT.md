# Arabic Translation & RTL QA Audit

## Methodology
- Reviewed route configuration and page components declared in `src/App.tsx` to inventory user-facing screens.
- Inspected React page components, shared layout elements, data modules, and utility hooks for translation usage and RTL handling.
- Compared `en` and `ar` branches of `translations` in `src/lib/i18n.ts` and the `useLanguage` hook for locale support, fallback behaviour, and direction switching.
- Evaluated supporting assets (`index.html`, constants, API client) for locale awareness, and scanned UI components for hard-coded copy, accessibility text, and UI direction assumptions.

## Route Inventory & Findings
| Route | Component | Translation Coverage (est.) | Notes |
| --- | --- | --- | --- |
| `/` | `src/pages/Home.tsx` | ~70% | Hero and most sections use `t()`, but testimonials, SEO/meta strings, and several assets remain hard-coded. |
| `/our-story` | `src/pages/OurStory.tsx` | ~75% | Core content localized, yet SEO keywords and some CTA context remain English-only. |
| `/services` | `src/pages/Services.tsx` | ~75% | Page consumes translation helpers, but keywords/meta strings and some aria labels stay hard-coded. |
| `/jurisdictions` | `src/pages/Jurisdictions.tsx` | <10% | All datasets, headings, and UI copy are hard-coded in English. |
| `/news-events` | `src/pages/NewsEvents.tsx` | <10% | Carousel content, badges, notices, and tooltips are static English strings. |
| `/insights-forms` | `src/pages/InsightsForms.tsx` | ~20% | Hero strings localized, but resource datasets, section headings, and modal copy are English. |
| `/contact` | `src/pages/Contact.tsx` | ~40% | Hero uses translations, yet validation, form controls, CTA copy, toast messages, and info panels are hard-coded. |
| `/terms-of-service` | `src/pages/TermsOfService.tsx` | 0% | Entire legal document in English with no localization hooks. |
| `/privacy-policy` | `src/pages/PrivacyPolicy.tsx` | 0% | Entire legal document in English; no `t()` usage. |
| `/cookie-policy` | `src/pages/CookiePolicy.tsx` | 0% | Entire page hard-coded in English. |
| `*` (404) | `src/pages/NotFound.tsx` | 0% | Static English error copy and SEO strings.

### `/` Home (`src/pages/Home.tsx`)
- Hard-coded testimonial quotes and attributions bypass translations. 【F:src/pages/Home.tsx†L21-L33】
- SEO metadata, keyword lists, and structured-data descriptors are English-only. 【F:src/pages/Home.tsx†L40-L82】
- Hero background `alt` text and other asset labels lack localization. 【F:src/pages/Home.tsx†L92-L97】

### `/our-story` (`src/pages/OurStory.tsx`)
- SEO keywords remain hard-coded. 【F:src/pages/OurStory.tsx†L18-L23】
- Page assets such as profile images rely on English filenames without localized alternatives; consider locale-aware assets or `alt` translations. 【F:src/pages/OurStory.tsx†L99-L118】【F:src/pages/OurStory.tsx†L333-L341】

### `/services` (`src/pages/Services.tsx`)
- SEO keyword array is English and bypasses i18n. 【F:src/pages/Services.tsx†L21-L30】
- Section aria-labels and button destinations remain English strings. 【F:src/pages/Services.tsx†L63-L104】

### `/jurisdictions` (`src/pages/Jurisdictions.tsx`)
- All metrics, treaty details, and descriptions are hard-coded English text; no translation helper usage anywhere in file. 【F:src/pages/Jurisdictions.tsx†L16-L200】
- Tabs, badges, and informational tooltips also lack RTL adjustments for iconography or numeric formatting.

### `/news-events` (`src/pages/NewsEvents.tsx`)
- Section metadata, carousel content, deadline warnings, and badge labels are static English strings. 【F:src/pages/NewsEvents.tsx†L18-L200】
- Iconography (e.g., deadline emoji) does not flip for RTL contexts; consider conditional styling.

### `/insights-forms` (`src/pages/InsightsForms.tsx`)
- Page-level SEO strings stay hard-coded English. 【F:src/pages/InsightsForms.tsx†L29-L38】
- Resource metrics, featured items, guide labels, and modal content are sourced from English-only data modules. 【F:src/data/insightsResources.ts†L7-L200】
- Several section headings (“Country intelligence”, “Country Guides”) bypass `t()`. 【F:src/pages/InsightsForms.tsx†L131-L138】

### `/contact` (`src/pages/Contact.tsx`)
- Validation schema errors and placeholders remain English. 【F:src/pages/Contact.tsx†L24-L33】【F:src/pages/Contact.tsx†L288-L394】
- Hero SEO data and keywords are hard-coded English. 【F:src/pages/Contact.tsx†L107-L115】
- Contact metrics, contact information cards, service lists, and partnership pillars duplicate English copy instead of consuming `t('contact…')`. 【F:src/pages/Contact.tsx†L37-L102】
- Toast success/error messages and API response fallbacks are English only. 【F:src/pages/Contact.tsx†L163-L175】

### Legal Pages (`src/pages/TermsOfService.tsx`, `src/pages/PrivacyPolicy.tsx`, `src/pages/CookiePolicy.tsx`)
- Entire documents are English with no translation keys, including headings, bullet lists, and update timestamps. 【F:src/pages/TermsOfService.tsx†L9-L124】【F:src/pages/PrivacyPolicy.tsx†L9-L106】【F:src/pages/CookiePolicy.tsx†L9-L170】

### 404 Page (`src/pages/NotFound.tsx`)
- SEO metadata and UI copy (“Oops! Page not found”, “Return to Home”) remain English. 【F:src/pages/NotFound.tsx†L9-L27】

## Translation Files & Locale Logic
- Only `en` and `ar` locales are registered; there is no `ar-KW` variant required for Kuwaiti localisation. 【F:src/lib/i18n.ts†L1-L9】
- Several Arabic numerals retain Western digits and plus signs (e.g., `'+50'`, `'24 ساعة'`), which should be converted to Arabic-Indic numerals for cultural accuracy. 【F:src/lib/i18n.ts†L818-L848】【F:src/lib/i18n.ts†L1012-L1040】
- `useLanguage` lacks persistence (no `localStorage`/cookie) and falls back to English on reload, undermining Arabic continuity. 【F:src/hooks/useLanguage.tsx†L12-L34】
- Missing fallback logic: if a key is absent in Arabic, `t()` returns the key path string, not the English string. 【F:src/hooks/useLanguage.tsx†L26-L30】
- Translation structure is monolithic; ensure parity between `en` and `ar` keys through automated checks to prevent silent gaps.

## Shared Component & UI Issues
- Header logo `alt`, language switcher aria label, and dropdown helper text remain English. 【F:src/components/Header.tsx†L31-L52】【F:src/components/LanguageSwitcher.tsx†L18-L36】
- Footer location/address and social aria labels use hard-coded English copy. 【F:src/components/Footer.tsx†L17-L200】
- Loading states and suspense fallbacks default to English (“Loading...”, “Loading page…”). 【F:src/components/LoadingSpinner.tsx†L6-L18】【F:src/App.tsx†L24-L28】
- Error boundary fallback (headings, instructions, list items) is entirely English. 【F:src/components/ErrorFallback.tsx†L25-L76】
- Static constants (company description, business hours) exist only in English. 【F:src/lib/constants.ts†L2-L38】
- Base HTML metadata in `index.html` is English-only, affecting SEO/preview cards for Arabic markets. 【F:index.html†L1-L20】

## RTL Implementation Review
- `useLanguage` correctly toggles `document.documentElement.dir`, and global CSS targets `[dir="rtl"]`, providing baseline RTL support. 【F:src/hooks/useLanguage.tsx†L12-L34】【F:src/styles/rtl.css†L5-L120】
- However, many directional icons and arrow animations are not mirrored; review components such as navigation links and CTA arrows for RTL flips (e.g., `.group-hover:translate-x-1`). 【F:src/components/Header.tsx†L65-L115】【F:src/pages/Home.tsx†L115-L158】
- Layout-specific RTL classes (`dir-rtl`) are applied only on a subset of pages (Home, Our Story, Services); other pages rely solely on global CSS, which may not adjust bespoke spacing utilities or transforms. 【F:src/pages/Home.tsx†L87-L140】【F:src/pages/OurStory.tsx†L122-L200】【F:src/pages/Services.tsx†L58-L164】

## Language Quality Observations
- Arabic copy generally reads professionally, but several entries appear literal or omit localized numerals/punctuation (e.g., Western `%` and `+` signs). 【F:src/lib/i18n.ts†L818-L848】【F:src/lib/i18n.ts†L1012-L1040】
- Legal and technical terms within translations should be reviewed by a native Kuwaiti IP specialist to confirm tone consistency.

## Language Switcher & Locale Behaviour
- Switcher exposes English and Arabic options but shows “Coming soon” in English for unsupported languages. 【F:src/components/LanguageSwitcher.tsx†L18-L36】
- Selected language is not persisted; refreshing resets to English despite `documentElement.dir` update on selection. 【F:src/hooks/useLanguage.tsx†L12-L34】
- No URL parameter or routing logic to reflect locale, making deep linking to Arabic content impossible.

## Technical Locale Handling
- API client omits `Accept-Language` headers, so backend integrations cannot respond with Arabic content when available. 【F:src/lib/api.ts†L35-L47】
- `APP_CONFIG.language` is hard-coded to `'en'`; downstream integrations or analytics cannot reflect Arabic sessions. 【F:src/lib/constants.ts†L46-L58】
- Structured data and SEO helpers only emit English content; Arabic meta descriptions/titles are absent. 【F:src/pages/Home.tsx†L40-L82】【F:index.html†L1-L20】

## Summary
- **Total routes reviewed:** 11
- **Overall translation completion:** ≈27% (weighted average across routes)
- **Issue counts:** 7 critical pages with no or minimal Arabic coverage (Jurisdictions, News & Events, Insights & Forms, Contact form details, Terms, Privacy, Cookie, 404); numerous minor issues (SEO strings, accessibility text, loading states).

### Prioritized Remediation Recommendations
1. **Localize high-traffic static pages:** Add translation keys for Jurisdictions, News & Events, Insights & Forms data modules, and all legal pages; ensure Arabic content parity before release.
2. **Normalize shared UI strings:** Externalize validation errors, toasts, alt text, SEO metadata, and loading/error states into `translations` so both languages stay in sync.
3. **Improve locale infrastructure:** Add `ar-KW` locale registration, persist user selection, implement fallback-to-English logic, and update API/meta layers to emit correct headers and Arabic SEO content.
4. **Enhance RTL polish:** Audit icon orientations, spacing utilities, and animations for RTL friendliness across every page, and validate Arabic numeral usage with native reviewers.
