import React, { useEffect, useRef } from 'react';

export const MouseGlow: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (divRef.current) {
        // Using radial gradient to simulate a flashlight/glow effect
        // 600px size for a smooth, large fallout
        // Increased opacity (0.12) for more visibility
        divRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(192, 138, 75, 0.12), transparent 40%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={divRef}
      // z-40 ensures it sits below the header (z-50) but above most content
      // pointer-events-none ensures clicks pass through
      // mix-blend-screen helps it look like light adding to the scene
      className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300 mix-blend-screen"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px circle at 50% 50%, rgba(192, 138, 75, 0.12), transparent 40%)`
      }}
    />
  );
};

export default MouseGlow;
