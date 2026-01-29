import { cn } from '@/lib/utils';

interface FloatingElementProps {
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  speed?: 'slow' | 'medium' | 'fast';
  delay?: number;
}

const FloatingElement = ({
  className,
  color = 'bg-blue-400',
  size = 'md',
  speed = 'medium',
  delay = 0
}: FloatingElementProps) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  const speedClasses = {
    slow: 'animate-[float_6s_ease-in-out_infinite]',
    medium: 'animate-[float_4s_ease-in-out_infinite]',
    fast: 'animate-[float_3s_ease-in-out_infinite]'
  };

  return (
    <div
      className={cn(
        'rounded-full opacity-40',
        sizeClasses[size],
        color,
        speedClasses[speed],
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    />
  );
};

export default FloatingElement;
