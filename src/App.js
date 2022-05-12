import React from 'react';
import Main from './components/Main';
import { useState } from 'react';

let lat = 0;
let lon = 0;

let geolocationActived = true;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((p) => {
    lat = p.coords.latitude;
    lon = p.coords.longitude;
    console.log(p.coords.latitude, p.coords.longitude);
  });
} else geolocationActived = false;

function App() {
  const [currentPosition, setCurrentPosition] = useState({
    lat,
    lon,
  });

  navigator.geolocation.watchPosition((p) => {
    lat = p.coords.latitude;
    lon = p.coords.longitude;
    setCurrentPosition({ lat, lon });
  });

  return (
    <Main
      geolocationActived={geolocationActived}
      currentPosition={currentPosition}
    />
  );
}

export default App;
