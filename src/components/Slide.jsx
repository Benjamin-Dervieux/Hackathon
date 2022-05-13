import React, { useState, useEffect } from 'react';
import './slide.css';
import car from '../assets/car.png';
import man from '../assets/man.png';
import axios from 'axios';
import useLocalStorage from 'use-local-storage';
import { Link } from 'react-router-dom';

function Slide({ carbon }) {
  const [dataIn, setDataIn] = useLocalStorage('searchIn', []);
  const [searchValueIn, setSearchValueIn] = useState();

  useEffect(() => {
    axios
      .get(
        `http://api.positionstack.com/v1/forward?access_key=4a3c6ad48e64a982b7e01cade97919a5&query=${searchValueIn}`
      )

      .then((res) => {
        setDataIn([res.data.data[0].latitude, res.data.data[0].longitude]);
      });
  }, [dataIn, setDataIn, searchValueIn]);

  const [dataOut, setDataOut] = useLocalStorage('searchOut', []);
  const [searchValueOut, setSearchValueOut] = useState();
  useEffect(() => {
    axios
      .get(
        `http://api.positionstack.com/v1/forward?access_key=4a3c6ad48e64a982b7e01cade97919a5&query=${searchValueOut}`
      )

      .then((res) => {
        setDataOut([res.data.data[0].latitude, res.data.data[0].longitude]);
      });
  }, [dataOut, setDataOut, searchValueOut]);

  return (
    <div className="slideContainer">
      <div className="chooseContainer">
        <div className="inputContainer">
          <p>Votre trajet</p>
          <input
            className="inp1"
            placeholder="Départ :  '2, Quai Perrache, 69002 Lyon'"
            onBlur={(e) => setSearchValueIn(e.target.value)}
          ></input>
          <input
            className="inp2"
            placeholder="Arrivée :  '12, rue de la Charité, 69002 Lyon'"
            onBlur={(e) => setSearchValueOut(e.target.value)}
          ></input>
        </div>
        <div className="infoContainer">
          <div className="carContainer">
            <img className="logo1" src={car} alt=""></img>
            <p>{carbon}kg de Co2</p>
          </div>
          <div className="walkContainer">
            <img className="logo2" src={man} alt=""></img>
            <p className="slideParagraphe">points</p>
          </div>
        </div>
      </div>
      <Link to="/ViewLive">
        <button>GO !</button>
      </Link>
    </div>
  );
}

export default Slide;
