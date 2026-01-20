import React from 'react';
import '../styles/under-construction.css';

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="content">
        <h1>hchautard.fr</h1>
        <h2>Site en construction</h2>
        <h3>Mon portfolio arrive bientôt !</h3>
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
