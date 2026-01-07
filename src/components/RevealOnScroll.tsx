
import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number; // Delay in ms
  className?: string;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15, // Trigger state change when element is 15% visible
        rootMargin: '0px 0px -100px 0px' // Offset bottom by 100px to trigger exit animation while still slightly in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform will-change-[opacity,transform] ${
        isVisible
          ? 'opacity-100 translate-y-0 blur-0 scale-100'
          : 'opacity-0 translate-y-8 blur-[2px] scale-[0.98]'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
