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
        <h2 className="project-title">CerisoNet (back)</h2>
        <Image
          src="/assets/images/cerisonet_login_page.jpg"
          alt="CerisoNet - aperçu de la page de connexion"
          className="project-image"
          fill={true}
        />
      </a>
    </div>
  );
}
