import React from 'react';
import styles from './Present.module.scss';

const Present = () => {
  return (
    <div className={styles.present}>
      <div className={styles.santa}>
        <div className={styles.santa__hat}></div>
        <div className={styles.santa__eyes}></div>
        <div className={styles.santa__beard}>
        <div className={styles.santa__beard_cover}></div>
        </div>
        <div className={styles.santa__smile}></div>
      </div>
      <div className={styles.present__top}>
        <div className={styles.present__ribbon__vertical}></div>
        <div className={styles.present__bow}></div>
      </div>
      <div className={styles.present__box}>
        <div className={styles.present__ribbon__vertical}></div>
        <div className={styles.present__ribbon__horizontal}></div>
      </div>
    </div>
  );
}

export default Present;
