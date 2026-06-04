import React, { useState } from 'react';
import '../../styles/grid-content/stack-block.css';
import {
  React as ReactIcon,
  NodeJs,
  TypeScript,
  Python,
  SymfonyLight,
  NextJs,
  Docker,
  Angular,
} from 'developer-icons';

export default function StackBlock() {
  const stack = [
    { label: 'React', icon: ReactIcon },
    { label: 'Next.js', icon: NextJs },
    { label: 'Node.js', icon: NodeJs },
    { label: 'Symfony', icon: SymfonyLight },
    { label: 'TypeScript', icon: TypeScript },
    { label: 'Python', icon: Python },
    { label: 'Docker', icon: Docker },
    { label: 'Angular', icon: Angular },
  ];

  const isCarousel = stack.length > 6;
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(stack.length / itemsPerPage);

  const goToPage = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const visibleStack = isCarousel
    ? stack.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
      )
    : stack;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isCarousel) return;
    if (e.key === 'ArrowLeft') goToPrev();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div
      className={`stack-container ${isCarousel ? 'has-carousel' : ''}`}
      role={isCarousel ? 'region' : undefined}
      aria-label={isCarousel ? 'Carousel de technologies' : undefined}
      onKeyDown={handleKeyDown}
    >
      {isCarousel && (
        <button
          className="carousel-btn prev"
          onClick={goToPrev}
          aria-label="Page précédente"
        >
          ‹
        </button>
      )}

      <div className="stack-block">
        {isCarousel && (
          <span className="sr-only" aria-live="polite">
            Page {currentIndex + 1} sur {totalPages}
          </span>
        )}
        {visibleStack.map((tech) => (
          <div key={tech.label} className="tech-item">
            <div aria-hidden="true">
              <tech.icon size={32} />
            </div>
            <span>{tech.label}</span>
          </div>
        ))}
      </div>

      {isCarousel && (
        <button
          className="carousel-btn next"
          onClick={goToNext}
          aria-label="Page suivante"
        >
          ›
        </button>
      )}

      {isCarousel && (
        <div className="carousel-dots" role="tablist" aria-label="Pages du carousel">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              role="tab"
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToPage(index)}
              aria-label={`Page ${index + 1}`}
              aria-selected={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
