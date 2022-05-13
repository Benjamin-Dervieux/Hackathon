import React from 'react';
import Point from '../components/Point';
import { Link } from 'react-router-dom';
//import TableauBord from '../screen/TableauBord';
import './LevelResult.css';

const LevelResult = (props) => {
  return (
    <div className="containerResult">
      <Point />
      <h1 className="title_1"> Résultat </h1>
      <div className="bravo">
        <div className="title_bravo">Bravo !</div>
        <div className="container">
          <div className="paragraphe">
            En préférant la marche à d’autres types de transport, vous venez
            d’économiser <span className="kiloCo2"> {props.KiloCo2} </span> par
            rapport à un moyen de transport véhiculé !
            <span className="Win">
              <p>
                Vous venez de gagner
                <span className="point"> {props.point} </span>
              </p>
            </span>
          </div>
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
          <Link to="/">Ok</Link>
        </button>
      </div>
    </div>
  );
};
export default LevelResult;
