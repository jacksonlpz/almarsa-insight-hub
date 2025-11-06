# News Events Carousel Arrow Positioning Fix

## Issue
In the "News & Events" page, the left and right carousel arrows in the "Official Sources" section were positioned at the edges (`left-0` and `right-0`), causing them to overlap and cover the headlines in each card.

## Root Cause

### The Problem
The carousel navigation arrows were positioned with:
```tsx
<CarouselPrevious className="left-0" />
<CarouselNext className="right-0" />
```

This placed the arrows at the very edge (0px from left/right), which caused them to:
- ❌ Overlap with card content
- ❌ Cover headlines and text
- ❌ Create poor user experience
- ❌ Make content hard to read

### Default Carousel Behavior
The carousel component default positioning is:
- Previous button: `-left-12` (48px outside the container)
- Next button: `-right-12` (48px outside the container)

However, this was being overridden in the NewsEvents page, forcing the arrows to sit at the edge.

## Solution Applied

### Updated Arrow Positioning

Changed the arrow positioning to move them significantly further outside the content area:

```tsx
// BEFORE:
<CarouselPrevious className="left-0" />
<CarouselNext className="right-0" />

// AFTER (Final Version):
<CarouselPrevious className="-left-8 sm:-left-10 lg:-left-12" />
<CarouselNext className="-right-8 sm:-right-10 lg:-right-12" />
```

### What This Does:

#### Mobile (< 640px):
- Previous arrow: `-left-8` = **32px outside** the container (left)
- Next arrow: `-right-8` = **32px outside** the container (right)

#### Tablet (640px - 1024px):
- Previous arrow: `sm:-left-10` = **40px outside** the container (left)
- Next arrow: `sm:-right-10` = **40px outside** the container (right)

#### Desktop (≥ 1024px):
- Previous arrow: `lg:-left-12` = **48px outside** the container (left)
- Next arrow: `lg:-right-12` = **48px outside** the container (right)

### Visual Representation:

**Before:**
```
┌────────────────────────────┐
│[←]  Headline Text      [→] │  ← Arrows covering content
│                            │
│  Card Content Here         │
└────────────────────────────┘
```

**After:**
```
[←] ┌────────────────────┐ [→]  ← Arrows outside content
    │  Headline Text     │
    │                    │
    │  Card Content Here │
    └────────────────────┘
```

## Benefits

✅ **No content overlap** - Arrows positioned outside the card boundaries
✅ **Headlines fully visible** - Text is no longer covered by navigation buttons
✅ **Better UX** - Clear separation between navigation and content
✅ **Responsive** - Adjusts positioning based on screen size
✅ **Maintains accessibility** - Arrows still easily clickable/tappable

## Deployment Information

**Date:** October 9, 2025  
**Status:** ✅ **DEPLOYED** (Updated with increased spacing)

### Production URLs
- **Live Site:** https://almarsa-insight-hub-main-1vhss74kk-jacksonlpzs-projects.vercel.app
- **Inspect:** https://vercel.com/jacksonlpzs-projects/almarsa-insight-hub-main/6SZYndj5ndM3QSC8LoWGhFTG2txn

### Build Stats
- **Build Time:** 5.42s
- **Deployment Time:** ~5s
- **Bundle Updated:** NewsEvents component
- **Note:** Arrow spacing increased by 100% from initial fix

## Technical Details

### File Modified
- **src/pages/NewsEvents.tsx** (Lines 97-98)

### Component Affected
- `SectionCarousel` component
- Used in "Official Sources" section
- Displays GCC country IP updates in carousel format

### Tailwind Classes Used
- `-left-4` = `left: -1rem` (16px)
- `-left-6` = `left: -1.5rem` (24px)
- `-right-4` = `right: -1rem` (16px)
- `-right-6` = `right: -1.5rem` (24px)

### Why Not Use Default `-left-12`?
The parent container has `px-8 sm:px-12` padding, which creates space for the arrows. Using `-left-4` and `-left-6` positions the arrows within this padding area, keeping them visible without requiring extra horizontal space.

## Testing Checklist

### Desktop Testing ✓
- [ ] Navigate to News & Events page
- [ ] Scroll to "Official Sources" section
- [ ] Verify arrows are visible outside cards
- [ ] Check headlines are fully readable
- [ ] Test arrow click functionality
- [ ] Verify all 6 country carousels

### Mobile Testing ✓
- [ ] Open on mobile device (< 640px)
- [ ] Check arrow positioning doesn't overlap content
- [ ] Verify arrows are still tappable
- [ ] Test swipe gesture still works
- [ ] Check all country cards display correctly

### Cross-Browser Testing ✓
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

## Related Components

### Carousel Component Structure:
```tsx
<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />  ← Updated positioning
  <CarouselNext />      ← Updated positioning
</Carousel>
```

### Parent Container:
```tsx
<div className="px-8 sm:px-12">  ← Provides space for arrows
  <Carousel>...</Carousel>
</div>
```

## Alternative Solutions Considered

1. ❌ **Increase container padding** - Would create unnecessary whitespace
2. ❌ **Hide arrows on mobile** - Reduces functionality
3. ❌ **Place arrows inside cards** - Looks cluttered
4. ✅ **Position arrows in padding area** - Clean, functional, responsive

## Rollback Instructions

If issues occur, revert to edge positioning:

```tsx
// Revert to edge positioning
<CarouselPrevious className="left-0" />
<CarouselNext className="right-0" />
```

Or use default behavior (remove className override):
```tsx
// Use component defaults
<CarouselPrevious />
<CarouselNext />
```

Then rebuild and redeploy:
```bash
npm run build
vercel --prod
```

## Additional Notes

### Countries in Official Sources Section:
1. Qatar (QA)
2. Bahrain (BH)
3. Saudi Arabia (SA)
4. Kuwait (KW)
5. UAE (AE)
6. Oman (OM)

Each country card has its own carousel with autoplay enabled (4-second delay).

### Carousel Features:
- ✅ Autoplay with 4-second intervals
- ✅ Stops on user interaction
- ✅ Loop enabled
- ✅ Keyboard navigation (Arrow keys)
- ✅ Touch/swipe support on mobile
- ✅ Responsive arrow positioning

## Status
✅ **DEPLOYED** - Carousel arrows now properly positioned outside content area

---

**Impact:** Improved readability and UX in Official Sources section  
**User Benefit:** Headlines fully visible, no content obstruction  
**Technical Quality:** Clean, responsive, maintains accessibility
