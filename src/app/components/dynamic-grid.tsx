'use client';
import Card from '@/app/components/card';
import LeafletMap from '@/app/components/leaflet-map-wrapper';
import '../styles/dynamic-grid.css';
import EducationBlock from '@/app/components/grid-content/education-block';
import ExperienceBlock from '@/app/components/grid-content/experience-block';
import ProfileBlock from '@/app/components/grid-content/profile-block';
import ContactBlock from '@/app/components/grid-content/contact-block';
import StackBlock from '@/app/components/grid-content/stack-block';

export default function DynamicGrid() {
  return (
    <div className="wrapper">
      <Card className="glass-card one">
        <ProfileBlock />
      </Card>
      <Card className="glass-card two">
        <StackBlock />
      </Card>
      <Card className="glass-card three">
        <ExperienceBlock />
        <EducationBlock />
      </Card>

      <Card className="glass-card four">
        {/* Placeholder for future content */}
        zzzzzzzzzz
      </Card>

      {/* Map */}
      <Card className="glass-card five">
        <LeafletMap />
      </Card>

      {/* Contact Me */}
      <Card className="glass-card six">
        <ContactBlock />
      </Card>
    </div>
  );
}
