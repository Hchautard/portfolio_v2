import Card from '@/app/components/card';
import '../styles/project-grid.css';
import AnomalieBlock from '@/app/components/project-content/anomalie-block';
import FromagerieBlock from '@/app/components/project-content/fromagerie-block';
import CerisonetBlock from '@/app/components/project-content/cerisonet-block';

export default function Project() {
  return (
    <div className="wrapper-project">
      <Card className="one-project">
        <h3>Mes projets</h3>
        <p>Une sélection de mes réalisations récentes</p>
      </Card>

      <Card className="two-project">
        <div className="project-card-content">
          <AnomalieBlock />
        </div>
      </Card>

      <Card className="three-project">
        <div className="project-card-content">
          <FromagerieBlock />
        </div>
      </Card>

      <Card className="four-project">
        <div className="project-card-content">
          <CerisonetBlock />
        </div>
      </Card>

      <Card className="five-project">
        <span className="section-icon">✦</span>
        <span>Plus de projets</span>
        <a
          href="https://github.com/Hchautard"
          className="btn-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir mon GitHub
        </a>
      </Card>
    </div>
  );
}
