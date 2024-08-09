'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

const Mapping = () => {
  useEffect(() => {
    const L = require('leaflet');
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer center={[6.528299278760955, 3.3777842449119304]} zoom={13} style={{ height: '50vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[6.528299278760955, 3.3777842449119304]}>
        <Popup>
          18, ayinke street, Akoka
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapping;
