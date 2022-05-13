import React from 'react';
import LevelResult from '../components/LevelResult';
import './resultats.css';

const result = () => {
  return (
    <div>
      <LevelResult KiloCo2="1,8 kg de Co2" point="1023 points !" />
    </div>
  );
};

export default result;
