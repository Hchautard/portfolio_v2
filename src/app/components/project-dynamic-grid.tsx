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

export default function ProjectDynamicGrid() {
  const playSound = useSound('assets/sounds/hey_listen_navy.mp3', 4000);

  return (
    <div className="project-wrapper">
      <Card onMouseEnter={playSound} className="glass-card one">
        This is a Card
      </Card>
      <Card onMouseEnter={playSound} className="glass-card one">
        This is a Card
      </Card>
      <Card onMouseEnter={playSound} className="glass-card one">
        This is a Card
      </Card>

      <Card className="glass-card one">This is a Card</Card>
      <Card className="glass-card one">This is a Card</Card>
      <Card className="glass-card one">This is a Card</Card>
    </div>
  );
}
