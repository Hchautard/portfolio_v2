'use client';
import DynamicGrid from '@/app/components/dynamic-grid';
import ProjectDynamicGrid from '@/app/components/project-dynamic-grid';
import Header from '@/app/components/header';
import SwitchDarkMode from '@/app/components/switch-dark-mode';
import { useState } from 'react';

export default function Home() {
  const [actualView, setActualView] = useState(['presentation']);

  function transitionView() {
    const projectSection = document.querySelector('.project-grid');
    if (projectSection && actualView[0] === 'presentation') {
      projectSection.scrollIntoView({ behavior: 'smooth' });
      setActualView(['projects']);
      const arrowElement = document.querySelector('.arrow');
      if (arrowElement) {
        arrowElement.className = 'arrow glass m-10 rotate-180';
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActualView(['presentation']);
      const arrowElement = document.querySelector('.arrow');
      if (arrowElement) {
        arrowElement.className = 'arrow glass m-10 rotate-0';
      }
    }
  }

  return (
    <div>
      <Header />

      <SwitchDarkMode />

      <main
        className="items-center sm:items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20"
        id="main"
      >
        <div className="presentation-grid" id="home">
          <DynamicGrid />
        </div>

        <div className="arrow glass m-10" onClick={transitionView}>
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

        <div className="project-grid" id="projects">
          <ProjectDynamicGrid />
        </div>

        <div className="arrow glass m-10" onClick={transitionView}>
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

        <div className="project-grid" id="contact">
          <ProjectDynamicGrid />
        </div>
      </main>
    </div>
  );
}
