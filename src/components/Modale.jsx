import React from 'react';
import styles from './historique.module.css';
import HistoriqueInfos from './HistoriqueInfos';
import { TiArrowDownThick } from 'react-icons/ti';

const Modale = ({ revele, cache }) =>
  revele ? (
    <React.Fragment>
      <div className={styles.overlay} />
      <div className={styles.wrapper}>
        <div className={styles.modale}>
          <button className={styles.close} type="button" onClick={cache}>
            <TiArrowDownThick
              style={{
                height: '25px',
                marginBottom: '5px',
                width: '50px',
              }}
            />
          </button>
        </div>
        <div>
          <HistoriqueInfos
            data={[
              { distance: 100, carbon: 500, point: 500 },
              { distance: 100, carbon: 500, point: 500 },
              { distance: 100, carbon: 500, point: 500 },
            ]}
          />
        </div>
      </div>
    </React.Fragment>
  ) : null;

export default Modale;
