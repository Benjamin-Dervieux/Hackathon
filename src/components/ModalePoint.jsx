import React from 'react';
import '../screen/Home';
import Slide from '../components/Slide';
import { CgClose } from 'react-icons/cg';

const ModalePoint = ({ revele, cache, carbon }) =>
  revele ? (
    <React.Fragment>
      <div className="over" />
      <div className="wrap">
        <div className="mod">
          <div className="clos">
            <button type="button" onClick={cache}>
              <span>
                <CgClose />
              </span>
            </button>
          </div>
          <Slide carbon={carbon} />
        </div>
      </div>
    </React.Fragment>
  ) : null;
export default ModalePoint;
