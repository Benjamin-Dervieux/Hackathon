/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import ControlButtons from './ControlButtons';
import useLocalStorage from 'use-local-storage';
import { RiLeafFill } from 'react-icons/ri';
import './liveInformations.css';

export default function LiveInformations({ distancePath }) {
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useLocalStorage('distance', 0);
  const [points, setPoints] = useLocalStorage('points', 0);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setTime(time + 10);
    }, 10);

    let distanceTotalPath = 0;
    for (let i = 0; i < distancePath.length; i++) {
      distanceTotalPath += distancePath[i];
    }

    setDistance(Math.round(distanceTotalPath * 10) / 10);
    setPoints(Math.round(distanceTotalPath * 100 * 10) / 10);

    return () => {
      clearInterval(interval);
      localStorage.setItem('time', time);
    };
  });

  return (
    <div className="liveInformationsContainer">
      <div className="run-infos">
        <div className="dataContainer">
          {points}
          <RiLeafFill />
        </div>
        <div className="dataContainer">
          <Timer time={time} />
        </div>
        <div className="dataContainer">{distance}km</div>
      </div>
      <div className="buttonContainer">
        <ControlButtons />
      </div>
    </div>
  );
}
