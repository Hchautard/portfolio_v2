'use client';
import Card from '@/app/components/card';
import LeafletMap from '@/app/components/leaflet-map-wrapper';
import '../styles/dynamic-grid.css';
import EducationBlock from '@/app/components/grid-content/education-block';
import ExperienceBlock from '@/app/components/grid-content/experience-block';
import ProfileBlock from '@/app/components/grid-content/profile-block';
import ContactBlock from '@/app/components/grid-content/contact-block';
import NetworkBlock from '@/app/components/grid-content/network-block';
import StackBlock from '@/app/components/grid-content/stack-block';

export default function DynamicGrid() {
  return (
    <div className="wrapper">
      <Card className="glass-card one">
        <ProfileBlock />
      </Card>
      <div className="glass-card two">
        <Card className="two-one">
          <StackBlock />
        </Card>
        <Card className="two-two">This is a Card</Card>
      </div>
      <Card className="glass-card three">
        <ExperienceBlock />
        <EducationBlock />
      </Card>
      <Card className="glass-card four">This is a Card</Card>

      {/* Map */}
      <Card className="glass-card five">
        <LeafletMap />
      </Card>

      {/* Contact Me */}
      <Card className="glass-card six">
        <ContactBlock />
      </Card>

      {/*  Social Networks*/}
      <Card className="glass-card seven">
        <NetworkBlock />
      </Card>
    </div>
  );
}
