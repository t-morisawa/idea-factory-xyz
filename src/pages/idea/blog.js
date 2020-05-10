import React from "react";
import { Helmet } from "react-helmet";
import AppContainer from "../../scamper/containers/AppContainer";

export default () => {
  return (
      <div>
      <Helmet>
      <meta charSet="utf-8" />
      <title>ブログ記事を書く前に答える質問集 - アイデアファクトリー</title>
      </Helmet>
      <AppContainer appType="blog" />
      </div>
  )
}
