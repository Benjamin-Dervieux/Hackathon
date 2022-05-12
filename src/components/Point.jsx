import React from 'react';
import './point.css';
import { RiLeafFill } from 'react-icons/ri';

function Point() {
  return (
    <>
      <div className="pointContainer">
        1 243
        <RiLeafFill
          style={{
            color: 'white',
            fontSize: '17pt',
          }}
        />
      </div>
      <div className="bottomContainer">
        <div className="bottom__color-container">
          <h5>Demarrer un trajet</h5>
        </div>
        <div className="bottom__color-container">
          <h5>Tableau de bord</h5>
        </div>
      </div>
    </>
  );
}

export default Point;
