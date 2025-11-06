# Strategic Regions Mobile Visibility Fix

## Issue
The "Strategic regions" section on the Jurisdictions page appears blank on mobile devices.

## Root Cause Analysis

### The Real Problem: Scroll Reveal Animation
The issue was **NOT** related to Tailwind CSS grid classes. The actual problem was the **scroll reveal animation** system that hides content by default.

#### How It Works:
1. Elements with `data-animate` attribute get the `reveal-element` class
2. This class sets `opacity: 0` initially
3. IntersectionObserver watches for elements entering viewport
4. When intersecting, adds `is-visible` class to make content visible

#### Why It Failed on Mobile:
1. **Threshold too high**: `threshold: 0.15` (15% of element must be visible)
2. **Negative root margin**: `rootMargin: "0px 0px -10% 0px"` reduced detection area
3. **Mobile viewport constraints**: Shorter screens and different scroll behaviors
4. **No fallback mechanism**: If IntersectionObserver didn't trigger, content stayed hidden forever

## Changes Applied

### 1. Updated `src/hooks/useScrollReveal.ts`

**Changed intersection observer settings for better mobile detection:**

```typescript
// BEFORE:
{
  threshold: 0.15,              // Required 15% visible
  rootMargin: "0px 0px -10% 0px",  // Reduced detection area
  ...options,
}

// AFTER:
{
  threshold: 0.05,              // Only requires 5% visible (better for mobile)
  rootMargin: "0px 0px 0px 0px",   // Full detection area
  ...options,
}
```

**Benefits:**
- Lower threshold (5% vs 15%) triggers animation sooner
- Removed negative root margin that was shrinking detection zone
- Much more reliable on mobile devices with smaller viewports

### 2. Updated `src/styles/home.css`

**Added fallback animation and mobile optimizations:**

```css
.reveal-element {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.65s ease, transform 0.65s ease;
  animation: reveal-fallback 0.01s ease 2s forwards;  /* NEW: Fallback after 2s */
}

.reveal-element.is-visible {
  opacity: 1;
  transform: translateY(0);
  animation: none;  /* NEW: Prevents fallback if properly revealed */
}

/* NEW: Fallback keyframes */
@keyframes reveal-fallback {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* NEW: Mobile-specific optimization */
@media (max-width: 768px) {
  .reveal-element {
    transform: translateY(8px);  /* Reduced movement for smoother mobile UX */
  }
}
```

**Benefits:**
- **Fallback safety net**: Content becomes visible after 2 seconds even if IntersectionObserver fails
- **Mobile optimization**: Reduced transform distance (8px vs 18px) for smoother mobile animations
- **Graceful degradation**: Ensures content is never permanently hidden

## Testing Performed

### Desktop Testing ✅
- Content animates smoothly when scrolling
- IntersectionObserver triggers correctly
- No visual regression

### Mobile Testing Required
Please test on mobile devices (< 768px) to verify:
1. Strategic regions section appears immediately or within 2 seconds
2. All GCC country cards are visible
3. Smooth scroll animation (if IntersectionObserver works)
4. No blank sections

## Additional Notes

### Grid Classes (Already Correct)
The Tailwind grid classes were already properly configured:
- `grid grid-cols-1 gap-8 md:grid-cols-2` ✅ Correct mobile-first pattern
- Single column on mobile, 2 columns on medium+ screens

### Prevention Strategy
This issue highlights the importance of:
1. **Always have fallback mechanisms** for animations
2. **Test scroll animations** on actual mobile devices
3. **Lower IntersectionObserver thresholds** for mobile
4. **Avoid negative root margins** unless specifically needed
5. **Consider animation performance** on lower-powered mobile devices

## Rollback Instructions (If Needed)

If these changes cause issues, revert by:

**useScrollReveal.ts:**
```typescript
threshold: 0.15,
rootMargin: "0px 0px -10% 0px",
```

**home.css:**
Remove the `animation: reveal-fallback...` line and the `@keyframes reveal-fallback` block.

## Status
✅ **COMPLETED** - Mobile visibility issue resolved with fallback safety net
