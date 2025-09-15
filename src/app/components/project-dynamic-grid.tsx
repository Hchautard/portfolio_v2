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
  const projects = [
    {
      title: 'Project 1',
      description: 'Description 1',
      image: '/assets/images/31.jpg',
      link: '#',
      gradient: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    },
    {
      title: 'Project 2',
      description: 'Description 2',
      image: '/assets/images/32.jpg',
      link: '#',
      gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500',
    },
    {
      title: 'Project 3',
      description: 'Description 3',
      image: '/assets/images/43.jpg',
      link: '#',
      gradient: 'bg-gradient-to-r from-green-400 to-blue-500',
    },
    {
      title: 'Project 4',
      description: 'Description 4',
      image: '/assets/images/44.jpg',
      link: '#',
      gradient: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
    },
    {
      title: 'Project 5',
      description: 'Description 5',
      image: '/assets/images/47.jpg',
      link: '#',
      gradient: 'bg-gradient-to-r from-yellow-400 to-red-500',
    },
    {
      title: 'Project 6',
      description: 'Description 6',
      image: '/assets/images/48.jpg',
      link: '#',
      gradient: 'bg-gradient-to-r from-indigo-400 to-purple-500',
    },
  ];

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
