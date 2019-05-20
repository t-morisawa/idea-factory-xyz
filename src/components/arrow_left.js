import React from "react"
import { Link } from "gatsby";
import styles from '../scss/custom.module.scss';


export default (props) => {
  return (
    <Link to={props.path} className={`${styles.btn} ${styles.btnSecondary} ${styles.mxAuto} ${styles.col2} ${styles.btnLg}`}>
      戻る
    </Link>
  )
}
