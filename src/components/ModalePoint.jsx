import React from 'react';
import '../screen/Home';
import Slide from '../components/Slide';
import { CgClose } from 'react-icons/cg';

const ModalePoint = ({ revele, cache }) =>
  revele ? (
    <React.Fragment>
      <div className="over" />
      <div className="wrap">
        <div className="mod">
          <div className="clos">
            <button className="btn" type="button" onClick={cache}>
              <span>
                <CgClose
                  style={{
                    background: '#33785b',
                    borderRadius: '50px',
                    color: 'white',
                    fontSize: '20pt',
                  }}
                />
              </span>
            </button>
          </div>
          <Slide />
        </div>
      </div>
    </React.Fragment>
  ) : null;
export default ModalePoint;
