import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../screen/Home';
import Tableaudebord from '../screen/TableauBord';
import Resultats from '../screen/Resultats';
import ViewLive from '../screen/ViewLive';

export default function Main({ currentPosition, geolocationActived }) {
  useEffect(() => {}, [currentPosition]);

  return (
    <main>
      {!geolocationActived && (
        <p> Erreur, la géolocalisation n'est pas activée</p>
      )}
      <Routes>
        <Route path="/" element={<Home position={currentPosition} />} />
        <Route path="/Tableaudebord" element={<Tableaudebord />} />
        <Route path="/Resultats" element={<Resultats />} />
        <Route
          path="/ViewLive"
          element={<ViewLive position={currentPosition} />}
        />
      </Routes>
    </main>
  );
}
