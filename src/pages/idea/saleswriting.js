import React from "react";
import ScriptTag from "../../components/scripttag";
import { Helmet } from "react-helmet";

export default () => {
  return (
      <div>
      <Helmet>
      <meta charSet="utf-8" />
      <title>セールスコピーライティング - アイデアファクトリー</title>
      </Helmet>
      <div id="root"></div>
      <ScriptTag src="https://storage.googleapis.com/idea-factory-js/saleswriting.js" id="external-script" />
      </div>
  )
}
