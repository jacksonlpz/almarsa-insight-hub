// Router configuration and future flags
export const routerConfig = {
  future: {
    // Enable React 18 concurrent features
    v7_startTransition: true,
    // Update relative route resolution for better Splat route handling
    v7_relativeSplatPath: true,
    // Enable future router features for smoother v7 migration
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
};

export type RouterConfig = typeof routerConfig;