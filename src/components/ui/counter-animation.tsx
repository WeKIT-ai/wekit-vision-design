import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface CounterAnimationProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  startOnView?: boolean;
}

const CounterAnimation = ({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  className,
  startOnView = true
}: CounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!startOnView) {
      animateCounter();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  const animateCounter = () => {
    const startTime = performance.now();
    const startValue = 0;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default CounterAnimation;
