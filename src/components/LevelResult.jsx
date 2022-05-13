import React from 'react';
import './LevelResult.css';

const LevelResult = () => {
  return (
    <div className="containerResult">
      <h1 className="title_1"> Résultat </h1>
      <div className="bravo">
        <div className="title_bravo">Bravo !</div>
        <div className="paragraphe">
          En préférant la marche à d’autres types de transport, vous venez
          d’économiser <span className="kiloCo2">1,8 kg de Co2</span> par
          rapport à un moyen de transport véhiculé !
          <span className="Win">
            <p>
              Vous venez de gagner
              <span className="point"> 1023 points !</span>
            </p>
          </span>
        </div>
      </div>
      <div className="auto">
        <div className="divpalier">
          <p className="plier1">Palier 12</p>
          <p className="plier1">Palier 13</p>
        </div>
        <div className="counter">
          <div class="progressBarContainer">
            <div class="progressBar"></div>
          </div>
        </div>
      </div>
      <div className="button">
        <button type="submit" className="button_ok">
          OK
        </button>
      </div>
    </div>
  );
};
export default LevelResult;
