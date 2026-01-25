import Card from '@/app/components/card';
import '../styles/project-grid.css';

export default function Project() {
  const projects = [
    {
      title: 'Projet Principal',
      description: 'Description du projet',
      image: '/assets/images/project-1.jpg',
    },
    {
      title: 'Projet 2',
      image: '/assets/images/project-2.jpg',
    },
    {
      title: 'Projet 3',
      image: '/assets/images/project-3.jpg',
    },
    {
      title: 'Projet 4',
      image: '/assets/images/project-4.jpg',
    },
  ];

  return (
    <div className="wrapper-project">
      <Card className="one-project">
        <h3>Mes projets</h3>
        <p>Une sélection de mes réalisations récentes</p>
      </Card>

      <Card className="two-project">
        <div className="project-card-content">
          <span className="project-title">{projects[1]?.title}</span>
        </div>
      </Card>

      <Card className="three-project">
        <div className="project-card-content">
          <span className="project-title">{projects[2]?.title}</span>
        </div>
      </Card>

      <Card className="four-project">
        <div className="project-card-content">
          <span className="project-title">{projects[3]?.title}</span>
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
