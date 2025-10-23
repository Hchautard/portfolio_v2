// src/app/components/leaflet-map-wrapper.tsx
'use client';

import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./leaflet-map'), {
  ssr: false,
  loading: () => (
    <div className="height-full width-full">Chargement de la carte...</div>
  ),
});

export default LeafletMap;
