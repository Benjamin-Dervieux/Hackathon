/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import './viewLive.css';
import DisplayMap from '../components/DisplayMap';
import LiveInformations from '../components/LiveInformations';
import L from 'leaflet';
import axios from 'axios';

let distance = 0;

export default function ViewLive({ position }) {
  const [distancePath, setDistancePath] = useState([0]);
  const [path, setPath] = useLocalStorage('currentPath', null);
  const [currentTrace, setcurrentTrace] = useLocalStorage('currentTrace', [
    [position.lon, position.lat],
  ]);

  useEffect(() => {
    axios
      .get(
        'https://graphhopper.com/api/1/route?point=45.7542305,4.8386187&point=46.1542305,4.8386187&profile=foot&points_encoded=false&key=069d8bb6-b216-4624-a674-1ef192df4dcc'
      )
      .then((response) => response.data)
      .then((data) => setPath(data.paths[0].points));

    let interval = null;

    interval = setInterval(() => {
      setcurrentTrace([...currentTrace, [position.lon, position.lat]]);

      if (currentTrace.length >= 2) {
        const from = L.latLng(currentTrace.at(-2));
        const to = L.latLng(currentTrace.at(-1));
        distance = from.distanceTo(to).toFixed(0) / 1000;
      }

      setDistancePath([...distancePath, distance]);
    }, 55000);

    return () => {
      clearInterval(interval);
    };
  }, [position]);

  return (
    <div className="viewLiveContainer">
      <DisplayMap
        path={path}
        currentTrace={currentTrace}
        position={position}
        zoom={20}
      />
      <LiveInformations distancePath={distancePath} />
    </div>
  );
}
