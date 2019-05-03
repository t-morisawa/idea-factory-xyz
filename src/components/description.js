import React from "react";
import ArrowBack from "../components/arrow_left";
import ArrowForward from "../components/arrow_right";
import styles from '../scss/custom.module.scss';


export default (props) => {
  return (
      <div className={styles.container}>
      <div className={styles.row}>
      <div className={styles.colLg}>
      <ArrowBack path="/" />
      </div>
      <div className={styles.colLg8}>
      {props.children}
    </div>
      <div className={styles.colLg}>
      <ArrowForward path={props.to} />
      </div>
      </div>
      </div>
  )
}
