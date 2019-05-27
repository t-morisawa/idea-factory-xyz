import React from "react";
import { Link } from "gatsby";
import styles from '../scss/custom.module.scss';


export default () => {
  return (
      <div className={`${styles.mt2} ${styles.container}`}>
      <h1>アイデアファクトリー</h1>
      <div className={styles.row}>
        <div className={styles.colLg}></div>
        <div className={styles.colLg8}>
          <Link to="/desc/swot/">
          <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
            <div className={styles.p3}>自分に何ができるかを考える</div>
            <div className={styles.p3}>SWOT</div>
          </div>
          </Link>
      <Link to="/desc/factfulness/">
      <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
      <div className={styles.p3}>データのカラクリを見抜く</div>
      <div className={styles.p3}>ファクトフルネス</div>
      </div>
      </Link>
      <Link to="/desc/scamper/">
            <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
              <div className={styles.p3}>作ったアイデアにひねりを加える</div>
              <div className={styles.p3}>SCAMPER</div>
            </div>
          </Link>
      <Link to="/desc/blog/">
      <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
      <div className={styles.p3}>読まれるブログ記事を書く</div>
      <div className={styles.p3}>BLOG</div>
      </div>
      </Link>
      <Link to="/desc/triz/">
            <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
              <div className={styles.p3}>5分で発明する</div>
              <div className={styles.p3}>TRIZ</div>
            </div>
          </Link>
      {/* <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
          <div className={styles.p3}>アイデアを出す</div>
          <div className={styles.p3}>ブレインストーミング</div>
          </div> */}
    {/*   <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
            <div className={styles.p3}>作ったアイデアを普及させる</div>
            <div className={styles.p3}>AIDMA</div>
            </div> */}
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
