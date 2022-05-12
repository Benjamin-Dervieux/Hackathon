import React, { useEffect } from 'react';
import './home.css';
import Point from '../components/Point';
import DisplayMap from '../components/DisplayMap';
import useLocalStorage from 'use-local-storage';

function Home({ position }) {
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
    <div>
      <div>
        <Point />
        <DisplayMap currentTrace={currentTrace} position={position} zoom={20} />
      </div>
    </div>
  );
}

export default Home;
