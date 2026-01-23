import React from 'react';
import Image from 'next/image';
import '../../styles/grid-content/profile-block.css';
import NetworkBlock from '@/app/components/grid-content/network-block';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faBriefcase,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

const informations = [
  { icon: faMapMarkerAlt, text: 'Montpellier' },
  { icon: faBriefcase, text: 'Fullstack Developer' },
  { icon: faCode, text: 'React · Symfony · Node' },
];

export default function ProfileBlock() {
  return (
    <div className="profile-block">
      {/* Photo + Badge + titre */}
      <div className="profile-header">
        <div className="profile-image-container">
          <Image
            src={'/assets/images/pp.jpeg'}
            alt="Hugo Chautard - Développeur Full Stack"
            width={160}
            height={160}
            className="profile-image"
            priority
          />
        </div>

        {/* Badge de présentation */}
        <div className="intro-wrapper">
          <div className="intro-available">
            <span>Disponible</span>
          </div>

          <h2>Hugo Chautard</h2>
          <p>Développeur Full Stack</p>
        </div>
      </div>

      {/* Informations principales */}
      <div className="profile-infos">
        {informations.map((info) => (
          <div key={info.text} className="info-item">
            <FontAwesomeIcon icon={info.icon} />
            <span>{info.text}</span>
          </div>
        ))}
      </div>

      {/* Réseaux */}
      <div className="profile-networks">
        <NetworkBlock />
      </div>
    </div>
  );
}
