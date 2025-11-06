import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: string;
  duration?: number;
  className?: string;
}

const CountUp = ({ end, duration = 2000, className = "" }: CountUpProps) => {
  const [count, setCount] = useState<string>("0");
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Extract number and suffix (like +, %)
    const match = end.match(/^(\d+)(.*)$/);
    if (!match) {
      setCount(end);
      return;
    }

    const targetNumber = parseInt(match[1], 10);
    const suffix = match[2];
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutCubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNumber = Math.floor(easeProgress * targetNumber);

      setCount(`${currentNumber}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, end, duration]);

  return (
    <div ref={elementRef} className={className}>
      {count}
    </div>
  );
};

export default CountUp;
