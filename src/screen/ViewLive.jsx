/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import './viewLive.css';
import DisplayMap from '../components/DisplayMap';

export default function ViewLive({ position }) {
  const [currentTrace, setcurrentTrace] = useLocalStorage('currentTrace', [
    [position.lon, position.lat],
  ]);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setcurrentTrace([...currentTrace, [position.lon, position.lat]]);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <DisplayMap currentTrace={currentTrace} position={position} zoom={20} />
  );
}
