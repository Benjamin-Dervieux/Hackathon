import React, { useEffect } from 'react';
import './home.css';
import Point from '../components/Point';
import DisplayMap from '../components/DisplayMap';
import useLocalStorage from 'use-local-storage';
import PointModale from '../components/PointModale';
import ModalePoint from '../components/ModalePoint';

function Home({ position }) {
  const [currentTrace, setcurrentTrace] = useLocalStorage('currentTrace', [
    [position.lon, position.lat],
  ]);
  const { revele, toggle } = PointModale();

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
      <div className="bottomContainer">
        <div className="bottom__color-container">
          <button className="btn" type="button" onClick={toggle}>
            Demarrer un trajet
          </button>
          <ModalePoint revele={revele} cache={toggle} />
        </div>
        <div className="bottom__color-container">
          <button type="button" className="btn">
            Tableau de bord
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
