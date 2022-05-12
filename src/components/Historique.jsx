import React from 'react';
import HistoriqueModale from './HistoriqueModale';
import Modale from './Modale';

function Historique() {
  const { revele, toggle } = HistoriqueModale();

  return (
    <div>
      <button onClick={toggle}>Historique</button>
      <Modale revele={revele} cache={toggle} />
    </div>
  );
}
export default Historique;
