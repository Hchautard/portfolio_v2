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

  return (
    <div className={`stack-container ${isCarousel ? 'has-carousel' : ''}`}>
      {isCarousel && (
        <button
          className="carousel-btn prev"
          onClick={goToPrev}
          aria-label="Précédent"
        >
          ‹
        </button>
      )}

      <div className="stack-block">
        {visibleStack.map((tech) => (
          <div key={tech.label} className="tech-item" title={tech.label}>
            <tech.icon size={32} />
            <span>{tech.label}</span>
          </div>
        ))}
      </div>

      {isCarousel && (
        <button
          className="carousel-btn next"
          onClick={goToNext}
          aria-label="Suivant"
        >
          ›
        </button>
      )}

      {isCarousel && (
        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToPage(index)}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
