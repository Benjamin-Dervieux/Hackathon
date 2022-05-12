/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import './viewLive.css';
import DisplayMap from '../components/DisplayMap';
import LiveInformations from '../components/LiveInformations';
import L from 'leaflet';

let distance = 0;

export default function ViewLive({ position }) {
  const [distancePath, setDistancePath] = useState([0]);
  const [currentTrace, setcurrentTrace] = useLocalStorage('currentTrace', [
    [position.lon, position.lat],
  ]);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setcurrentTrace([...currentTrace, [position.lon, position.lat]]);

      if (currentTrace.length >= 2) {
        const from = L.latLng(currentTrace.at(-2));
        const to = L.latLng(currentTrace.at(-1));
        distance = from.distanceTo(to).toFixed(0) / 1000;
      }

      setDistancePath([...distancePath, distance]);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="viewLiveContainer">
      <DisplayMap currentTrace={currentTrace} position={position} zoom={20} />
      <LiveInformations distancePath={distancePath} />
    </div>
  );
}
