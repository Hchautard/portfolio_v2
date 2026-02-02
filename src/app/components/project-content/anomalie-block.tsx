import React from 'react';
import Image from 'next/image';

export default function AnomalieBlock() {
  return (
    <div className="project-block">
      <a href="lanomalie.com" target="_blank" rel="noopener noreferrer">
        <span className="project-title">L&#39;Anomalie</span>
        <div className="image-container">
          <Image
            src="/assets/images/machine_tattoo_landing_page.jpg"
            alt="Anomalie Project"
            className="project-image"
            fill={true}
          />
        </div>
      </a>
    </div>
  );
}
