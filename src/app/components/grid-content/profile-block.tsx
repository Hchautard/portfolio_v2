import React from 'react';
import Image from 'next/image';
import '../../styles/grid-content/profile-block.css';
import NetworkBlock from '@/app/components/grid-content/network-block';
import { SocialIcon } from 'react-social-icons';

const informations = [
  { icon: 'fa fa-map-marker', text: 'Montpellier' },
  { icon: 'fa fa-briefcase', text: 'Software Developer' },
  { icon: 'fa fa-smile', text: 'Happy' },
  { icon: 'fa fa-code', text: 'Coding Enthusiast' },
];

export default function ProfileBlock() {
  return (
    <div className="profile-block">
      {/* Photo + Badge + titre */}
      <div className="profile-header">
        <div className="profile-image-container">
          <Image
            src={'/assets/images/pp.jpeg'}
            alt="Profile Picture"
            width={180}
            height={180}
            className="profile-image"
          />
        </div>

        {/* Badge de présentation */}
        <div className="intro-wrapper">
          <div className="intro-available badge">
            <span> &#x1F4BB; </span>
            <p>Available to work</p>
          </div>

          <h2>Hugo Chautard</h2>

          <h3>Développeur Full Stack</h3>
        </div>
      </div>

      {/* Informations principales   */}
      <div className="profile-infos">
        {informations.map((info) => (
          <div key={info.text} className="info-item badge">
            <i className={info.icon} aria-hidden="true"></i>
            <span>{info.text}</span>
          </div>
        ))}
      </div>

      {/* Réseaux  */}
      <div className="profile-networks">
        <NetworkBlock />
      </div>
    </div>
  );
}
