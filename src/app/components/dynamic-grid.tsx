'use client';
import Card from '@/app/components/card';
import LeafletMap from '@/app/components/leaflet-map-wrapper';
import '../styles/dynamic-grid.css';
import EducationBlock from '@/app/components/grid-content/education-block';
import ExperienceBlock from '@/app/components/grid-content/experience-block';
import ProfileBlock from '@/app/components/grid-content/profile-block';
import StackBlock from '@/app/components/grid-content/stack-block';
import Project from '@/app/pages/project';
import AboutMeBlock from '@/app/components/grid-content/about-me-block';

export default function DynamicGrid() {
  return (
    <div className="wrapper">
      <Card className="one">
        <ProfileBlock />
      </Card>

      <Card className="two">
        <div className="two-title">
          <span className="section-icon">✦</span>
          <h3>Ma stack (évolutive)</h3>
        </div>
        <StackBlock />
      </Card>

      <Card className="three">
        <ExperienceBlock />
        <EducationBlock />
      </Card>

      <Card className="four">
        <Project />
      </Card>

      {/* Map */}
      <Card className="five">
        <LeafletMap />
      </Card>

      {/* About Me */}
      <Card className="six">
        <AboutMeBlock />
      </Card>
    </div>
  );
}
