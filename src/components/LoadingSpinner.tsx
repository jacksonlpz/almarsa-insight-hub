interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  message?: string;
}

const LoadingSpinner = ({ size = "md", message = "Loading..." }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-muted border-t-primary`} />
      {message && (
        <p className="text-sm text-muted-foreground">{message}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
