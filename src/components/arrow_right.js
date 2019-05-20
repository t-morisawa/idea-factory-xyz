import React from "react"
import { Link } from "gatsby";
import styles from '../scss/custom.module.scss';


export default (props) => {
  // 現状外部リンクになっているがそのうち統一して内部リンクにすること
  return (
    <Link to={props.path} className={`${styles.btn} ${styles.btnPrimary} ${styles.mxAuto} ${styles.col2} ${styles.btnLg}`}>
      進む
    </Link>
  )
}
