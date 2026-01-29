import { ReactNode, Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface StaggeredChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in';
  duration?: number;
}

const StaggeredChildren = ({
  children,
  className,
  staggerDelay = 100,
  initialDelay = 0,
  animation = 'fade-up',
  duration = 500
}: StaggeredChildrenProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClasses = {
    'fade-up': 'translate-y-6 opacity-0',
    'fade-down': '-translate-y-6 opacity-0',
    'fade-left': 'translate-x-6 opacity-0',
    'fade-right': '-translate-x-6 opacity-0',
    'zoom-in': 'scale-90 opacity-0'
  };

  const visibleClasses = 'translate-y-0 translate-x-0 scale-100 opacity-100';

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        const delay = initialDelay + index * staggerDelay;
        
        return cloneElement(child as React.ReactElement<{ className?: string; style?: React.CSSProperties }>, {
          className: cn(
            child.props.className,
            'transition-all ease-out',
            isVisible ? visibleClasses : animationClasses[animation]
          ),
          style: {
            ...child.props.style,
            transitionDuration: `${duration}ms`,
            transitionDelay: `${delay}ms`
          }
        });
      })}
    </div>
  );
};

export default StaggeredChildren;
