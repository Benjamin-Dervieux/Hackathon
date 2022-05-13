import { Link } from 'react-router-dom';
import React from 'react';
import './controlButtons.css';
import { ImStop2 } from 'react-icons/im';

export default function ControlButtons({ handleReset }) {
  const stopButton = (
    <Link to={'/Resultats'}>
      <div className="btnLiveView btn-two">
        <ImStop2 color="#000000" />
      </div>
    </Link>
  );

  return (
    <div className="Control-Buttons">
      <div>{stopButton}</div>
    </div>
  );
}
