'use client';
import { useCallback, useRef, useState } from 'react';
import Card from '@/app/components/card';
import NestedCard from '@/app/components/nested-card';
import '../styles/project-dynamic-grid.css';

export const useSound = (soundPath: string, throttleTime = 5000) => {
  const audioRef = useRef(null as HTMLAudioElement | null);
  const lastPlayedRef = useRef(0);

  return useCallback(() => {
    const now = Date.now();

    if (now - lastPlayedRef.current < throttleTime) {
      return;
    }

    lastPlayedRef.current = now;

    if (!audioRef.current) {
      audioRef.current = new Audio(soundPath);
      audioRef.current.volume = 1;
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(console.error);
  }, [soundPath, throttleTime]);
};

export const openNestedCard = (
  bgGradient: string,
  childElement: HTMLElement
) => {
  if (childElement && childElement.classList.contains('hidden')) {
    childElement.classList.remove('hidden');
  } else {
    childElement.classList.add('hidden');
  }
};
export default function ProjectDynamicGrid() {
  const playSound = useSound('assets/sounds/hey_listen_navy.mp3', 4000);

  // fake data for the card : title, description, image, link
  const projects: any[] = [];

  return (
    <div className="project-wrapper">
      {projects && projects.length > 0 ? (
        projects.map((project, index) => (
          <Card
            key={index}
            onMouseEnter={playSound}
            onClick={(e) =>
              openNestedCard(
                project.gradient,
                e.currentTarget.children[0] as HTMLElement
              )
            }
            className={`glass-card one`}
          >
            Clique ici !
            <NestedCard
              id={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              className={project.gradient}
            />
          </Card>
        ))
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
}
