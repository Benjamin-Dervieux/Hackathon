import React from 'react';
import styles from './historique.module.css';
import HistoriqueModale from './HistoriqueModale';
import Modale from './Modale';
import { TiArrowUpThick } from 'react-icons/ti';

function Historique() {
  const { revele, toggle } = HistoriqueModale();

  return (
    <div className={styles.historique}>
      <button className={styles.open} type="button" onClick={toggle}>
        <TiArrowUpThick
          style={{
            height: '25px',
            marginBottom: '5px',
            width: '50px',
          }}
        />
      </button>
      <Modale revele={revele} cache={toggle} />
    </div>
  );
}
export default Historique;
