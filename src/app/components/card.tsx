import React from 'react';

export default function Card({
  children,
  className = '',
  onMouseEnter,
}: {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
}) {
  function handleMouseEnter() {
    if (onMouseEnter) {
      onMouseEnter();
    }
  }

  return (
    <div
      className={`glass flex flex-col items-center justify-center p-4 rounded-lg shadow-lg ${className} hover:scale-[1.03] transition-transform duration-300`}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </div>
  );
}
