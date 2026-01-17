'use client';
import DynamicGrid from '@/app/components/dynamic-grid';
import Project from '@/app/pages/project';
import Header from '@/app/components/header';
import SwitchDarkMode from '@/app/components/switch-dark-mode';
import { useState } from 'react';

export default function Home() {
  const [actualView, setActualView] = useState(['presentation']);

  function transitionView(direction: string) {
    const projectSection = document.querySelector('#projects');
    const arrowElements = document.querySelectorAll('.arrow');

    if (direction === 'down') {
      if (actualView[0] === 'presentation') {
        // Transition vers la section projects
        if (projectSection) {
          projectSection.scrollIntoView({ behavior: 'smooth' });
          setActualView(['projects']);

          // Première flèche : rotation 180°
          if (arrowElements[0]) {
            arrowElements[0].classList.remove('rotate-0');
            arrowElements[0].classList.add('rotate-180');
          }
          // Deuxième flèche : reste à 0°
          if (arrowElements[1]) {
            arrowElements[1].classList.remove('rotate-180');
            arrowElements[1].classList.add('rotate-0');
          }
        }
      }
    } else if (direction === 'up') {
      if (actualView[0] === 'projects') {
        // Retour vers la section presentation
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActualView(['presentation']);

        // Première flèche : retour à 0°
        if (arrowElements[0]) {
          arrowElements[0].classList.remove('rotate-180');
          arrowElements[0].classList.add('rotate-0');
        }
        // Deuxième flèche : reste à 0°
        if (arrowElements[1]) {
          arrowElements[1].classList.remove('rotate-180');
          arrowElements[1].classList.add('rotate-0');
        }
      }
    }
  }

  return (
    <div>
      <Header />

      <SwitchDarkMode />

      <main
        className="items-center m-auto sm:items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20"
        id="main"
      >
        <div className="presentation-grid" id="home">
          <DynamicGrid />
        </div>

        <div
          className="arrow glass m-10 flex justify-center items-center mx-auto w-fit rotate-0"
          onClick={() =>
            transitionView(actualView[0] === 'presentation' ? 'down' : 'up')
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <div className="project-grid" id="projects"></div>
      </main>

      <Project />
    </div>
  );
}
