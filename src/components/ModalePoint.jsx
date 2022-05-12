import React from 'react';

const ModalePoint = ({ revele, cache }) =>
  revele ? (
    <React.Fragment>
      <button type="button" onClick={cache}>
        Je suis une modale
      </button>
    </React.Fragment>
  ) : null;

export default ModalePoint;
