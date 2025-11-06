// Development tools configuration
type ConsoleMethod = (...args: unknown[]) => void;

interface ReactDevToolsHook {
  settings?: Record<string, unknown> & {
    hideElementsWithPaths?: RegExp[];
  };
}

export const setupDevTools = () => {
  if (typeof window !== 'undefined' && import.meta.env.DEV) {
    // React DevTools configuration
    if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__.settings = {
        ...window.__REACT_DEVTOOLS_GLOBAL_HOOK__.settings,
        // Reduce noise in DevTools
        hideElementsWithPaths: [
          /node_modules/,
        ],
      };
    }

    // Suppress React Router future flag warnings in development console
    const originalWarn: ConsoleMethod = console.warn;
    console.warn = (...args: unknown[]) => {
      const [message] = args;
      
      // Filter out React Router future flag warnings in development
      if (
        typeof message === 'string' && 
        message.includes('React Router Future Flag Warning')
      ) {
        // Don't log these warnings as they're already handled
        return;
      }
      
      // Allow all other warnings
      originalWarn(...args);
    };

    // Add development helper functions to window
    window.devtools = {
      // Helper to check API connection
      checkAPI: async () => {
        try {
          const response = await fetch('/api/health');
          console.log('API Status:', response.status === 200 ? 'Connected' : 'Disconnected');
          return response.status === 200;
        } catch (error) {
          console.log('API Status: Disconnected');
          return false;
        }
      },
      
      // Helper to clear all localStorage
      clearStorage: () => {
        localStorage.clear();
        sessionStorage.clear();
        console.log('Storage cleared');
      },
      
      // Helper to get current route info
      getRouteInfo: () => {
        return {
          pathname: window.location.pathname,
          search: window.location.search,
          hash: window.location.hash,
        };
      }
    };

    if (import.meta.env.DEV) {
      console.log('🛠️ Development tools loaded. Use window.devtools for helper functions.');
    }
  }
};

// Runtime error handler
export const setupErrorHandling = () => {
  // Global error handler for unhandled JavaScript errors
  window.addEventListener('error', (event) => {
    // Filter out browser extension errors
    if (
      event.message.includes('Could not establish connection') ||
      event.message.includes('Receiving end does not exist') ||
      event.filename?.includes('extension')
    ) {
      // Suppress browser extension connection errors
      event.preventDefault();
      return false;
    }
    
    if (import.meta.env.DEV) {
      console.error('Unhandled error:', event.error);
    }
  });

  // Global handler for unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    // Filter out browser extension related promise rejections
    if (
      event.reason?.message?.includes('Could not establish connection') ||
      event.reason?.message?.includes('Extension context invalidated')
    ) {
      // Suppress browser extension promise rejections
      event.preventDefault();
      return false;
    }
    
    if (import.meta.env.DEV) {
      console.error('Unhandled promise rejection:', event.reason);
    }
  });
};

// TypeScript declarations for development helpers
declare global {
  interface Window {
    devtools?: {
      checkAPI: () => Promise<boolean>;
      clearStorage: () => void;
      getRouteInfo: () => { pathname: string; search: string; hash: string };
    };
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: ReactDevToolsHook;
  }
}