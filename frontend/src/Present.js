import React from 'react';
import classnames from 'classnames'
import styles from './Present.module.scss';

const Present = (props) => {
  const day = props.day;
  const [clicked, setClicked] = React.useState(false);

  return (
    <div
      id={day.id}
      className={classnames(styles.present, {
        [styles.active]: day.active,
        [styles.inactive]: !day.active,
        [styles.clicked]: clicked
      })}
      onClick={() => {
        setClicked(true);
        document.addEventListener("closed", () => {setClicked(false)});
        props.handleClick();
      }}
    >
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
      <span className={styles.present__number}>{day.id}</span>
    </div>
  );
}

export default Present;
