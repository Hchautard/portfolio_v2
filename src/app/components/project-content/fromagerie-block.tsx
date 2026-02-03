import React from 'react';
import Image from 'next/image';
import '../../styles/project-block.css';

export default function FromagerieBlock() {
  return (
    <div className="project-block">
      <a
        href="https://www.unefromagerie.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="project-title">Une Fromagerie</span>
        <Image
          src="/assets/images/une_fromagerie_landing_page.jpg"
          alt="Anomalie Project"
          className="project-image"
          fill={true}
          objectFit="cover"
        />
      </a>
    </div>
  );
}
