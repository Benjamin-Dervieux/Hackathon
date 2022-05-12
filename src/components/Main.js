import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../screen/Home';
import Tableaudebord from '../screen/TableauBord';
import Resultats from '../screen/Resultats';
import ViewLive from '../screen/ViewLive';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tableaudebord" element={<Tableaudebord />} />
        <Route path="/Resultats" element={<Resultats />} />
        <Route path="/ViewLive" element={<ViewLive />} />
      </Routes>
    </main>
  );
}
