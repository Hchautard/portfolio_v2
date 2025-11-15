import React from 'react';
import Image from 'next/image';
import '../../styles/grid-content/profile-block.css';

export default function ProfileBlock() {
  return (
    <div className="profile-block">
      {/* Photo avec étoiles décoratives */}
      <div className="profile-image-container">
        <div className="star star-1">✦</div>
        <div className="star star-2">✦</div>
        <div className="star star-3">✦</div>
        <div className="star star-4">✦</div>
        <Image
          src="https://images.unsplash.com/photo-1762936263573-af3e0d866980?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png"
          alt="Profile Picture"
          width={280}
          height={280}
          className="profile-image"
        />
      </div>

      {/* Badge de présentation */}
      <div className="intro-wrapper">
        <div className="intro-badge">
          <h2 className="intro-text">Enchanté, Hugo.</h2>
        </div>
        <div className="intro-badge">
          <p className="intro-quote">Je pense que je peux vous être utile :)</p>
        </div>
      </div>
    </div>
  );
}
