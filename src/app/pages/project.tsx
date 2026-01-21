import Card from '@/app/components/card';
import '../styles/project-grid.css';
import { FaStar } from 'react-icons/fa6';
import AnomalieBlock from '@/app/components/project-content/anomalie-block';

export default function Project() {
  return (
    <div className="wrapper-project">
      <Card className="glass-card one-project">Mes différents projets</Card>

      <Card className="glass-card two-project">
        <AnomalieBlock />
      </Card>

      <Card className="glass-card three-project">
        <AnomalieBlock />
      </Card>

      <Card className="glass-card four-project">
        <AnomalieBlock />
      </Card>

      <Card className="glass-card five-project">
        <FaStar className="star-icon" size={50} />
        {/*<span>Plus De Mon Travail</span>*/}
        <div className="custom-btn badge">Voir mon GitHub</div>
      </Card>
    </div>
  );
}
