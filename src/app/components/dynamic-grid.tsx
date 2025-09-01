'use client';
import Card from '@/app/components/card';
import '../styles/dynamic-grid.css';

export default function DynamicGrid() {
  return (
    <div className="wrapper">
      <Card className="glass-card one">This is a Card</Card>
      <div className="glass-card two">
        <Card className="two-one">Nested Card</Card>

        <Card className="two-two">This is a Card</Card>
      </div>
      <Card className="glass-card three">This is a Card</Card>

      <Card className="glass-card four">This is a Card</Card>
      <Card className="glass-card five">This is a Card</Card>
      <Card className="glass-card six">This is a Card</Card>
    </div>
  );
}
