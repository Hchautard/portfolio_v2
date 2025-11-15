'use client';
import Card from '@/app/components/card';
import LeafletMap from '@/app/components/leaflet-map-wrapper';
import '../styles/dynamic-grid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';
import Skeleton from '@mui/material/Skeleton';
import EducationBlock from '@/app/components/grid-content/education-block';
import ExperienceBlock from '@/app/components/grid-content/experience-block';
import ProfileBlock from '@/app/components/grid-content/profile-block';

export default function DynamicGrid() {
  const socialNetworks = [
    { url: 'https://linkedin.com/in/hchautard ', label: 'LinkedIn' },
    { url: 'https://github.com/Hchautard', label: 'GitHub' },
  ];

  return (
    <div className="wrapper">
      <Card className="glass-card one">
        <ProfileBlock />
      </Card>
      <div className="glass-card two">
        <Card className="two-one">Nested Card</Card>
        <Card className="two-two">This is a Card</Card>
      </div>
      <Card className="glass-card three">
        <EducationBlock />
        <ExperienceBlock />
      </Card>
      <Card className="glass-card four">This is a Card</Card>

      {/* Map */}
      <Card className="glass-card five">
        <LeafletMap />
      </Card>

      {/* Contact Me */}
      <Card className="glass-card six">
        <div className="six-header">
          <h6>Des questions ?</h6>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="2x"
            color="#ffffff"
          />
        </div>
        <h1>Contactez moi !</h1>
      </Card>

      {/*  Social Networks*/}
      <Card className="glass-card seven">
        {socialNetworks.map((network) => (
          <SocialIcon
            key={network.label}
            url={network.url}
            style={{ height: 100, width: 100, margin: '0 10px' }}
            fgColor="#fff"
            bgColor="transparent"
            aria-label={network.label}
          />
        ))}
      </Card>
    </div>
  );
}
