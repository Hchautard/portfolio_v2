import React from 'react';
import '../../styles/grid-content/about-me-block.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function AboutMeBlock() {
  return (
    <div className="about-me-block">
      <div className="six-header">
        <FontAwesomeIcon icon={faStar} size="2x" className="six-icon" />
        <h1>Qui suis-je ?</h1>
      </div>
      <p className={'six-paragraph'}>
        Je suis un développeur passionné par la création de solutions innovantes
        qui ont un impact positif sur la vie des gens. J'aime relever des défis
        techniques et apprendre de nouvelles technologies pour améliorer
        continuellement mes compétences. Mon objectif est de contribuer à des
        projets significatifs qui facilitent le quotidien des utilisateurs.
      </p>
    </div>
  );
}
