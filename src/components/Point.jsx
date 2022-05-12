import React from 'react';
import './point.css';
import { RiLeafFill } from 'react-icons/ri';

function Point() {
  return (
    <>
      <div className="pointContainer">
        1243
        <RiLeafFill
          style={{
            color: 'white',
            fontSize: '17pt',
          }}
        />
      </div>
    </>
  );
}

export default Point;
