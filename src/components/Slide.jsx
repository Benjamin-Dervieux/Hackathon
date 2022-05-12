import React from 'react';
import './slide.css';
import car from '../assets/car.png';
import man from '../assets/man.png';
import { GoogleComponent } from 'react-google-location';

const API_KEY = API_KEY_FROM_GOOGLE; // how to get key - step are below

function Slide() {
  return (
    <div className="slideContainer">
      <GoogleComponent apiKey={API_KEY} />
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
