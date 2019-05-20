import React from "react";
import ArrowBack from "../components/arrow_left";
import ArrowForward from "../components/arrow_right";
import styles from '../scss/custom.module.scss';


export default (props) => {
  return (
      <div className={`${styles.mt2} ${styles.container} ${styles.pb5} ${styles.mb5}`}>
      <div className={styles.row}>
      <div className={styles.colLg}></div>
      <div className={styles.colLg8}>
      {props.children}
      </div>
      <div className={styles.colLg}></div>
      <div className={`${styles.fixedBottom} ${styles.dFlex} ${styles.justifyContentAround} ${styles.my5}`}>
      <ArrowBack path="/" />
      <ArrowForward path={props.to} />
      </div>
      </div>
      </div>
  )
}
