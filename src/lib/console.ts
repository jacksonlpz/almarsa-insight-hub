// Console filtering and error suppression for cleaner development experience
export const setupConsoleFiltering = () => {
  if (typeof window === 'undefined') return;

  // Store original console methods
  const originalError = console.error;
  const originalWarn = console.warn;
  const originalLog = console.log;

  // Filter function for common non-critical errors
  const shouldSuppressMessage = (message: string): boolean => {
    const suppressPatterns = [
      // Browser extension errors
      'Could not establish connection',
      'Receiving end does not exist',
      'Extension context invalidated',
      'chrome-extension://',
      'moz-extension://',
      'content script loaded',
      
      // Ad blocker related errors
      'ERR_BLOCKED_BY_CLIENT',
      'net::ERR_BLOCKED_BY_CLIENT',
      'doubleclick.net',
      'googlesyndication',
      'ad_status.js',
      'log_event',
      
      // YouTube embed errors from ad blockers
      'www-embed-player.js',
      'youtubei/v1/log_event',
      'youtube.com/youtubei',
      
      // Google Maps tracking errors from ad blockers
      'maps.googleapis.com/maps/api/mapsjs/gen_204',
      'maps.google.com/maps/gen_204',
      
      // Browser extension reference errors
      'p_ is not defined',
      'ReferenceError: p_ is not defined',
      
      // React Router future flag warnings (we've already handled these)
      'React Router Future Flag Warning',
      
      // React DevTools suggestions in production
      'Download the React DevTools',
      
      // Common browser/development noise
      'Non-passive event listener',
      'Violation: Added non-passive event listener',
      
      // Known safe warnings that don't affect functionality
      'componentWillReceiveProps has been renamed',
      'componentWillMount has been renamed',
    ];

    return suppressPatterns.some(pattern => 
      message.toLowerCase().includes(pattern.toLowerCase())
    );
  };

  // Enhanced console.error with filtering
  console.error = (...args) => {
    const message = args[0];
    
    if (typeof message === 'string' && shouldSuppressMessage(message)) {
      return; // Suppress filtered messages
    }
    
    // Check for Error objects
    if (message instanceof Error) {
      if (shouldSuppressMessage(message.message)) {
        return;
      }
    }
    
    originalError.apply(console, args);
  };

  // Enhanced console.warn with filtering
  console.warn = (...args) => {
    const message = args[0];
    
    if (typeof message === 'string' && shouldSuppressMessage(message)) {
      return; // Suppress filtered messages
    }
    
    originalWarn.apply(console, args);
  };

  // Keep console.log unchanged but add timestamp in development
  if (import.meta.env.DEV) {
    console.log = (...args) => {
      const timestamp = new Date().toLocaleTimeString();
      originalLog.apply(console, [`[${timestamp}]`, ...args]);
    };
  }

  // Global error event listener with enhanced filtering
  window.addEventListener('error', (event) => {
    const errorMessage = event.message || '';
    const errorFilename = event.filename || '';
    
    // List of external domains/scripts to suppress
    const externalScriptPatterns = [
      'extension://',
      'moz-extension://',
      'www-embed-player.js',
      'youtube.com',
      'googlesyndication',
      'doubleclick.net',
      'googleapis.com',
      'maps.google.com',
    ];
    
    // Suppress browser extension errors and ad blocker related errors
    if (
      shouldSuppressMessage(errorMessage) ||
      externalScriptPatterns.some(pattern => errorFilename.includes(pattern))
    ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);

  // Global unhandled promise rejection listener with filtering
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    let shouldSuppress = false;
    
    if (reason instanceof Error) {
      shouldSuppress = shouldSuppressMessage(reason.message);
    } else if (typeof reason === 'string') {
      shouldSuppress = shouldSuppressMessage(reason);
    }
    
    if (shouldSuppress) {
      event.preventDefault();
      return false;
    }
  });

  if (import.meta.env.DEV) {
    console.log('🧹 Console filtering enabled - non-critical errors suppressed');
  }
};