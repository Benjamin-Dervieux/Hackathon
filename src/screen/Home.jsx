import React, { useEffect, useState } from 'react';
import './home.css';
import Point from '../components/Point';
import DisplayMap from '../components/DisplayMap';
import useLocalStorage from 'use-local-storage';
import PointModale from '../components/PointModale';
import ModalePoint from '../components/ModalePoint';
import axios from 'axios';

function Home({ position }) {
  const [path, setPath] = useLocalStorage('currentPath', null);
  const [currentTrace, setcurrentTrace] = useState([
    [position.lon, position.lat],
  ]);
  const searchIn = JSON.parse(localStorage.getItem('searchIn'));
  const searchOut = JSON.parse(localStorage.getItem('searchOut'));
  const searchInJoin = searchIn.join(',');
  const searchOutJoin = searchOut.join(',');
  const [distanceRoad, setDistanceRoad] = useState(0);
  const { revele, toggle } = PointModale();
  let carbon = 0;

  useEffect(() => {
    if (searchIn !== null && searchOut !== null) {
      axios
        .get(
          `https://graphhopper.com/api/1/route?point=${searchInJoin}&point=${searchOutJoin}&profile=foot&points_encoded=false&key=069d8bb6-b216-4624-a674-1ef192df4dcc`
        )
        .then((response) => response.data)
        .then(
          (data) =>
            setPath(data.paths[0].points) &&
            setDistanceRoad(data.paths[0].distance)
        );
    }

    let interval = null;

    interval = setInterval(() => {
      setcurrentTrace([...currentTrace, [position.lon, position.lat]]);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  carbon = (Math.round((distanceRoad / 1000) * 19.3) * 10) / 10;

  return (
    <div>
      <div>
        <Point />
        <DisplayMap
          path={path}
          currentTrace={currentTrace}
          position={position}
          zoom={20}
        />
      </div>
      <div className="bottomContainer">
        <div className="bottom__color-container">
          <button type="button" onClick={toggle}>
            Demarrer un trajet
          </button>
          <ModalePoint carbon={carbon} revele={revele} cache={toggle} />
        </div>
        <div className="bottom__color-container">
          <h5>Tableau de bord</h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
