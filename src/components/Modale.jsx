import React from 'react';

const Modale = ({ revele, cache }) =>
  revele ? (
    <React.Fragment>
      <div>
        <button type="button" onClick={cache}>
          <span>&times;</span>
        </button>
        <div>
          <p>voici la Modale</p>
        </div>
      </div>
    </React.Fragment>
  ) : null;

export default Modale;
