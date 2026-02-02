import React from 'react';
import Image from 'next/image';

export default function CerisonetBlock() {
  return (
    <div className="project-block">
      <a
        href="https://github.com/Hchautard/CerisoNet_back"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="project-title">CerisoNet (back)</span>
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
