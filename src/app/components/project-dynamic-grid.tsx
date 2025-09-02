'use client';
import Card from '@/app/components/card';
import '../styles/project-dynamic-grid.css';

export default function ProjectDynamicGrid() {
  return (
    <div className="project-wrapper">
      <Card className="glass-card one">This is a Card</Card>
      <Card className="glass-card one">This is a Card</Card>
      <Card className="glass-card one">This is a Card</Card>

      <Card className="glass-card one">This is a Card</Card>
      <Card className="glass-card one">This is a Card</Card>
      <Card className="glass-card one">This is a Card</Card>
    </div>
  );
}
