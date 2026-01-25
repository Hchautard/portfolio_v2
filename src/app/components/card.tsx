import React from 'react';

export default function Card({
  children,
  className = '',
  onMouseEnter,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  function handleMouseEnter() {
    if (onMouseEnter) {
      onMouseEnter();
    }
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (onClick) {
      onClick(e);
    }
  }

  return (
    <div
      className={`glass flex flex-col items-center justify-center p-4 rounded-lg shadow-lg ${className} ...`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
