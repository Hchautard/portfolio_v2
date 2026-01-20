import Card from '@/app/components/card';
import '../styles/project-grid.css';
import { FaStar } from 'react-icons/fa6';

export default function Project() {
  return (
    <div className="wrapper-project">
      <Card className="glass-card one-project">Mes différents projets</Card>

      <Card className="glass-card two-project">bb</Card>

      <Card className="glass-card three-project">cc</Card>

      <Card className="glass-card four-project">dd</Card>

      <Card className="glass-card five-project">
        <FaStar className="star-icon" size={50} />
        <span>Plus De Mon Travail</span>
        <div className="custom-btn">Voir mon GitHub</div>
      </Card>
    </div>
  );
}
