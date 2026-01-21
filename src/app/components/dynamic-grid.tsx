'use client';
import Card from '@/app/components/card';
import LeafletMap from '@/app/components/leaflet-map-wrapper';
import '../styles/dynamic-grid.css';
import EducationBlock from '@/app/components/grid-content/education-block';
import ExperienceBlock from '@/app/components/grid-content/experience-block';
import ProfileBlock from '@/app/components/grid-content/profile-block';
import ContactBlock from '@/app/components/grid-content/contact-block';
import StackBlock from '@/app/components/grid-content/stack-block';
import Project from '@/app/pages/project';
import { FaStar } from 'react-icons/fa6';
import AboutMeBlock from '@/app/components/grid-content/about-me-block';

export default function DynamicGrid() {
  return (
    <div className="wrapper">
      <Card className="glass-card one">
        <ProfileBlock />
      </Card>
      <Card className="glass-card two">
        <div className="two-title">
          <FaStar className="star-icon" size={20} />
          <p>Ma stack</p>
        </div>
        <p>Les différentes technos que j'utilise</p>
        <StackBlock />
      </Card>
      <Card className="glass-card three">
        <ExperienceBlock />
        <EducationBlock />
      </Card>

      <Card className="glass-card four">
        <Project />
      </Card>

      {/* Map */}
      <Card className="glass-card five">
        <LeafletMap />
      </Card>

      {/* About Me */}
      <Card className="glass-card six">
        <AboutMeBlock />
      </Card>
    </div>
  );
}
