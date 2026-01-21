import React from 'react';
import Image from 'next/image';

export default function AnomalieBlock() {
  return (
    <div className="project-block">
      <a href="lanomalie.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/images/machine_tattoo_landing_page.jpg"
          alt="Anomalie Project"
          className="project-image"
          fill={true}
        />
      </a>
    </div>
  );
}
