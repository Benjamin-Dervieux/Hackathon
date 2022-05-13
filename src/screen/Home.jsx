import React from 'react';
import './home.css';
import Point from '../components/Point';
import DisplayMap from '../components/DisplayMap';
import { useState } from 'react';
import PointModale from '../components/PointModale';
import ModalePoint from '../components/ModalePoint';

function Home({ position }) {
  const [currentTrace, setcurrentTrace] = useState([
    [position.lon, position.lat],
  ]);
  const { revele, toggle } = PointModale();

  let interval = null;

  interval = setInterval(() => {
    setcurrentTrace([...currentTrace, [position.lon, position.lat]]);
  }, 5000);

  clearInterval(interval);

  return (
    <div>
      <div>
        <Point />
        <DisplayMap currentTrace={currentTrace} position={position} zoom={20} />
      </div>
      <div className="bottomContainer">
        <div className="bottom__color-container">
          <button className="btns" type="button" onClick={toggle}>
            Demarrer un trajet
          </button>
          <ModalePoint revele={revele} cache={toggle} />
        </div>
        <div className="bottom__color-container">
          <a href="/Tableaudebord" className="btns">
            Tableau de bord
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
