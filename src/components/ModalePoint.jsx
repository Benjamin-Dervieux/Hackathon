import React from 'react';
import '../screen/Home';
import Slide from '../components/Slide';

const ModalePoint = ({ revele, cache }) =>
  revele ? (
    <React.Fragment>
      <div className="over" />
      <div className="wrap">
        <div className="mod">
          <button type="button" className="clos" onClick={cache}>
            <span>&time;</span>
          </button>
          <Slide />
        </div>
      </div>
    </React.Fragment>
  ) : null;
export default ModalePoint;
