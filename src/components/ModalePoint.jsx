import React from 'react';
import '../screen/Home';
import Slide from '../components/Slide';
import { TiArrowDownThick } from 'react-icons/ti';

const ModalePoint = ({ revele, cache, carbon }) =>
  revele ? (
    <React.Fragment>
      <div className="over" />
      <div className="wrap">
        <div className="mod">
          <div className="clos">
            <button className="btns" type="button" onClick={cache}>
              <span>
                <TiArrowDownThick
                  style={{
                    background: '#eef1f6',
                    borderRadius: '50px',
                    color: 'black',
                    fontSize: '20pt',
                    width: '50px',
                  }}
                />
              </span>
            </button>
          </div>
          <Slide carbon={carbon} />
        </div>
      </div>
    </React.Fragment>
  ) : null;
export default ModalePoint;
