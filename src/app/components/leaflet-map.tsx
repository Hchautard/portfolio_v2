import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function LeafletMap({
  className = '',
  onMouseEnter,
  onClick,
}: {
  className?: string;
  onMouseEnter?: () => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  const lat = 43.61092;
  const lon = 3.87723;

  // Fix pour les icônes Leaflet
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl:
        'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <div
      className={`height-full width-full ${className}`}
      style={{ height: '100%', width: '100%' }}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      <MapContainer
        center={[lat, lon]}
        zoom={12}
        scrollWheelZoom={false}
        zoomControl={false}
        boxZoom={false}
        style={{ height: '100%', width: '100%', borderRadius: '15px' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lon]}>
          <Popup>Je suis là !</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
