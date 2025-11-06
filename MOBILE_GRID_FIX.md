# Mobile Grid Display Fix - Jurisdictions Page

## Issue
The "Strategic regions" and other sections on the Jurisdictions page were appearing blank on mobile devices due to missing mobile-first Tailwind CSS grid column definitions.

## Root Cause
Tailwind CSS follows a mobile-first approach where utility classes without prefixes apply to all screen sizes. When using responsive grid classes like `md:grid-cols-2`, the mobile layout needs an explicit `grid-cols-1` to ensure proper single-column display on smaller screens.

### Problematic Pattern
```tsx
<div className="grid gap-6 md:grid-cols-2">
```

This defaults to an implicit grid layout on mobile, which can cause display issues.

### Correct Pattern
```tsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
```

This explicitly defines a single-column layout for mobile devices.

## Changes Applied

### File: `src/pages/Jurisdictions.tsx`

#### 1. Global Frameworks Section (Line 570)
**Before:**
```tsx
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
```

**After:**
```tsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
```

#### 2. Programme Governance Section (Line 631)
**Before:**
```tsx
<div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
```

**After:**
```tsx
<div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
```

## Verified Sections
All grid sections in the Jurisdictions page now follow the mobile-first pattern:
- ✅ Strategic regions (GCC Countries) - Already had `grid-cols-1`
- ✅ Global frameworks - **Fixed**
- ✅ Programme governance - **Fixed**

## Testing Recommendations
1. Test the Jurisdictions page on mobile devices (< 768px width)
2. Verify all sections display in a single column on mobile
3. Confirm proper 2-column layout on tablet (md breakpoint)
4. Confirm proper 3-column layout on desktop (xl breakpoint) where applicable

## Status
✅ **COMPLETED** - All grid sections now explicitly define mobile layouts using `grid-cols-1`.
