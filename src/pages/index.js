import React from "react";
import { Link } from "gatsby";
import styles from '../scss/custom.module.scss';


export default () => {
  return (
    <div className={styles.container}>
      <h1>アイデアファクトリー</h1>
      <div className={styles.row}>
        <div className={styles.colLg}></div>
        <div className={styles.colLg8}>
          <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
            <div className={styles.p3}>自分に何ができるかを考える</div>
            <div className={styles.p3}>SWOT</div>
          </div>
          <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
            <div className={styles.p3}>アイデアを出す</div>
            <div className={styles.p3}>ブレインストーミング</div>
          </div>
          <Link to="/scamper/">
            <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
              <div className={styles.p3}>作ったアイデアにひねりを加える</div>
              <div className={styles.p3}>SCAMPER</div>
            </div>
          </Link>
          <Link to="/triz/">
            <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
              <div className={styles.p3}>5分で発明する</div>
              <div className={styles.p3}>TRIZ</div>
            </div>
          </Link>
          <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
            <div className={styles.p3}>作ったアイデアを普及させる</div>
            <div className={styles.p3}>AIDMA</div>
          </div>
          <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
            <div className={styles.p3}>マーケティングにオススメの書籍</div>
            <div className={styles.p3}></div>
          </div>
        </div>
        <div className={styles.colLg}></div>
      </div>
    </div>
  )
}