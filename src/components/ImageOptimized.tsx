import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  width?: string | number;
  height?: string | number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const ImageOptimized = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  priority = false,
  onLoad,
  onError,
  wrapperClassName,
}: ImageOptimizedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const current = containerRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground text-sm',
          wrapperClassName
        )}
        style={{ width, height }}
      >
        Failed to load image
      </div>
    );
  }

  const shouldLoadImage = priority || isInView;

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden bg-muted', wrapperClassName)}
      style={{ width, height }}
    >
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted animate-pulse"
          style={{ width, height }}
          aria-label="Loading image..."
        />
      )}
      {shouldLoadImage && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'transition-all duration-500 ease-out',
            isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-105',
            className
          )}
          style={{
            willChange: isLoaded ? 'auto' : 'opacity, filter, transform'
          }}
        />
      )}
    </div>
  );
};

export default ImageOptimized;