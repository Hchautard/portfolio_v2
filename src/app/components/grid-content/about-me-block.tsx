import React from 'react';
import '../../styles/grid-content/about-me-block.css';

export default function AboutMeBlock() {
  return (
    <div className="about-me-block">
      <div className="six-header">
        <span className="six-icon">✦</span>
        <h2>À propos</h2>
      </div>
      <p className="six-paragraph">
        Développeur passionné par la création de solutions innovantes qui ont un
        impact positif sur la vie des gens. J'aime relever des défis techniques
        et apprendre de nouvelles technologies pour améliorer continuellement
        mes compétences.
      </p>
    </div>
  );
}
