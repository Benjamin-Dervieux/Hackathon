import React from 'react';
import './slide.css';
import car from '../assets/car.png';
import man from '../assets/man.png';
import { GoogleComponent } from 'react-google-location';

function Slide() {
  return (
    <div className="slideContainer">
      <GoogleComponent />
      <div className="topSlide"></div>
      <div className="chooseContainer">
        <div className="inputContainer">
          <p>Votre trajet</p>
          <input className="inp1"></input>
          <input className="inp2"></input>
        </div>
        <div className="infoContainer">
          <div className="carContainer">
            <img className="logo1" src={car} alt=""></img>
            <p>kg de Co2</p>
          </div>
          <div className="walkContainer">
            <img className="logo2" src={man} alt=""></img>
            <p>points</p>
          </div>
        </div>
      </div>
      <button>GO !</button>
    </div>
  );
}

export default Slide;
