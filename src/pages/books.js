import React from "react";
import styles from '../scss/custom.module.scss';
import { Helmet } from "react-helmet";


export default () => {
  return (
      <div className={`${styles.mt2} ${styles.container}`}>
      <Helmet>
      <meta charSet="utf-8" />
      <title>本サイトで紹介している書籍、ほか - アイデアファクトリー</title>
      </Helmet>
      <h1>本サイトで紹介している書籍、ほか - アイデアファクトリー</h1>
      <div className={styles.row}>
      <div className={styles.colLg}></div>
      <div className={styles.colLg8}>
      <h2>マーケティング編</h2>
      <ul>
      <li><a href="https://amzn.to/2xf4XvL" target="_blank" rel="noopener noreferrer">コトラーのマーケティング・コンセプト</a></li>
      <li><a href="https://amzn.to/2IYNqxp" target="_blank" rel="noopener noreferrer">データ・ドリブン・マーケティング</a></li>
      </ul>
      <h2>物語作り編</h2>
      <ul>
      <li><a href="https://amzn.to/2ITvW5u" target="_blank" rel="noopener noreferrer">神話の法則</a></li>
      <li><a href="https://amzn.to/2x5uCXY" target="_blank" rel="noopener noreferrer">キャラクターメーカー</a></li>
      </ul>
      <h2>組織・マネジメント編</h2>
      <ul>
      <li><a href="https://amzn.to/2J2poS9" target="_blank" rel="noopener noreferrer">マネジメント[エッセンシャル版] - 基本と原則</a></li>
      <li><a href="https://amzn.to/2IA6XFK" target="_blank" rel="noopener noreferrer">ピクサー流 創造するちから</a></li>
      <li><a href="https://amzn.to/2zymTWW" target="_blank" rel="noopener noreferrer">アジャイルサムライ 達人開発者への道</a></li>
      </ul>
      <h2>採用・人事編</h2>
      <ul>
      <li><a href="https://amzn.to/2ZNy2uT" target="_blank" rel="noopener noreferrer">採用基準</a></li>
      <li><a href="https://amzn.to/2ZIhBQl" target="_blank" rel="noopener noreferrer">NETFLIXの最強人事戦略</a></li>
      <li><a href="https://amzn.to/2ZHKDPR" target="_blank" rel="noopener noreferrer">ビジョナリー・カンパニー2 飛躍の法則</a></li>
      </ul>
      <h2>起業編</h2>
      <ul>
      <li><a href="https://amzn.to/2ZBXp2s" target="_blank" rel="noopener noreferrer">リーン・スタートアップ</a></li>
      <li><a href="https://amzn.to/2IxEoIG" target="_blank" rel="noopener noreferrer">起業の科学</a></li>
      </ul>
      </div>
      <div className={styles.colLg}></div>
      </div>
      </div>
  )
}
