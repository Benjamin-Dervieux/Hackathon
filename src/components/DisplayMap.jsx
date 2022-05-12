import React from 'react';
import {
  MapContainer as LeafletMap,
  TileLayer,
  GeoJSON,
  Marker,
  Polyline,
} from 'react-leaflet';
import ChangeMapCenter from './ChangeMapCenter';
import L from 'leaflet';
import cursor from '../assets/curseur.png';

// eslint-disable-next-line object-curly-newline
export default function DisplayMap({ path, currentTrace, position, zoom }) {
  const curseur = L.icon({
    iconUrl: cursor,
    iconSize: [50, 50],
  });

  return (
    <div className="map m-1 p-1 flex justify-center items-center">
      <LeafletMap center={position} zoom={zoom} scrollWheelZoom={false}>
        <ChangeMapCenter center={position} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={path} pathOptions={{ color: 'red' }} />
        <Polyline
          positions={currentTrace}
          pathOptions={{ color: 'orange', weight: '12' }}
        />
        <Marker position={position} icon={curseur} />
      </LeafletMap>
    </div>
  );
}
