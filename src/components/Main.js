import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

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
