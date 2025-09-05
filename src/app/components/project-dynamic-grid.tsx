'use client';
import { useCallback, useRef } from 'react';
import Card from '@/app/components/card';
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

export const zoomInProject = (
  bgGradient: string,
  element: HTMLElement | null
) => {
  if (element) {
    element.className += ` scale-[1.3] transition-transform duration-300`;
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
              zoomInProject(project.gradient, e.currentTarget as HTMLElement)
            }
            className={`glass-card one`}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
            {/*{project.image && (*/}
            {/*  <img*/}
            {/*    src={project.image}*/}
            {/*    alt={project.title}*/}
            {/*    className="w-full h-32 object-cover mt-2 rounded"*/}
            {/*  />*/}
            {/*)}*/}
          </Card>
        ))
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
}
