import React from 'react';
import styles from './historique.module.css';

function HistoriqueInfos({ data }) {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.elements}>
        <div>
          <div className={styles.content}>
            <div>Distance: </div>

            <div>Co2 éconimisé: </div>

            <div>Points obtenus: </div>
          </div>
        </div>
        {data.map(({ distance, carbon, point }) => (
          <div className={styles.content}>
            <div className={styles.pierre}>
              <div className={styles.data1}>{distance}</div>
            </div>
            <div className={styles.pierre}>
              <div className={styles.data2}> {carbon}</div>
            </div>
            <div className={styles.pierre}>
              <div className={styles.data3}> {point}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HistoriqueInfos;
