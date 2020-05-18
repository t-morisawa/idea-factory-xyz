import React from "react";
import { Link } from "gatsby";
import styles from '../scss/custom.module.scss';
import { Helmet } from "react-helmet";
import stylesOrg from '../styles/index.module.css';
import Header from '../components/Header';

export default () => {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
      <title>アイデアファクトリー</title>
      </Helmet>

      <Header />

      <div className={`${styles.mt4} ${styles.container}`}>
      <div className={styles.row}>
        <div className={styles.colLg}></div>
        <div className={styles.colLg8}>

      <h2 className={stylesOrg.headline}>アイデアを生み出す</h2>

      <Link to="/desc/scamper/">
      <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
      <div className={styles.p3}>作ったアイデアにひねりを加える</div>
      <div className={styles.p3}>SCAMPER</div>
      </div>
      </Link>
      <Link to="/desc/triz/">
      <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
      <div className={styles.p3}>5分で発明する</div>
      <div className={styles.p3}>TRIZ</div>
      </div>
      </Link>

      <h2 className={stylesOrg.headline}>プロジェクトを成功に導く</h2>

      <Link to="/desc/inceptiondeck/">
      <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
      <div className={styles.p3}>プロジェクトを定義する</div>
      <div className={styles.p3}>インセプションデッキ</div>
      </div>
      </Link>

      <h2 className={stylesOrg.headline}>自己分析する</h2>

      <Link to="/desc/swot/">
      <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
      <div className={styles.p3}>自分に何ができるかを考える</div>
      <div className={styles.p3}>SWOT</div>
      </div>
      </Link>

      <h2 className={stylesOrg.headline}>文章を書く</h2>

      <Link to="/desc/saleswriting/">
      <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
      <div className={styles.p3}>顧客を購買行動へと誘導する</div>
      <div className={styles.p3}>セールスコピーライティング</div>
      </div>
      </Link>

      <Link to="/desc/blog/">
      <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
      <div className={styles.p3}>読まれるブログ記事を書く</div>
      <div className={styles.p3}>BLOG</div>
      </div>
      </Link>

      <h2 className={stylesOrg.headline}>ベストセラーで学ぶ</h2>

      <Link to="/desc/factfulness/">
      <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
      <div className={styles.p3}>データのカラクリを見抜く</div>
      <div className={styles.p3}>ファクトフルネス</div>
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

      <h2 className={stylesOrg.headline}>勉強する</h2>

      <div className={`${styles.dFlex} ${styles.flexRow} ${styles.justifyContentBetween}`}>
      <Link to="/books">
      <div className={styles.p3}>本サイトで紹介している書籍、ほか</div>
      </Link>
            <div className={styles.p3}></div>
          </div>
        </div>
        <div className={styles.colLg}></div>
      </div>
      </div>
      </div>
  )
}
