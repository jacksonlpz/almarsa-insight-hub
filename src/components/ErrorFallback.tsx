import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const isNetworkError = error.message.includes('NetworkError') || 
                         error.message.includes('fetch');
  
  const isDevelopment = import.meta.env.MODE === 'development';

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-lg w-full">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
          
          <h1 className="text-2xl font-bold text-navy-deep mb-2">
            {isNetworkError ? 'Connection Error' : 'Something went wrong'}
          </h1>
          
          <p className="text-text-muted mb-6">
            {isNetworkError 
              ? 'Unable to connect to our servers. Please check your internet connection and try again.'
              : 'We apologize for the inconvenience. Our team has been notified of this issue.'
            }
          </p>

          {isDevelopment && (
            <div className="bg-muted p-4 rounded-lg mb-6 text-left">
              <p className="text-sm font-mono text-destructive break-all">
                {error.message}
              </p>
              {error.stack && (
                <details className="mt-2">
                  <summary className="text-sm font-medium cursor-pointer">
                    Stack Trace
                  </summary>
                  <pre className="text-xs mt-2 overflow-auto max-h-32 whitespace-pre-wrap">
                    {error.stack}
                  </pre>
                </details>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={resetErrorBoundary} className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
            
            <Button variant="outline" asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>

          {isNetworkError && (
            <div className="mt-6 text-sm text-text-muted">
              <p>You can also try:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Refreshing the page</li>
                <li>Checking your internet connection</li>
                <li>Contacting us at +965 9009 5960</li>
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorFallback;