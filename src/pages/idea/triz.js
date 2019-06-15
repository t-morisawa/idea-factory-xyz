import React from "react";
import ScriptTag from "../../components/scripttag";
import { Helmet } from "react-helmet";

export default () => {
  return (
      <div>
      <Helmet>
      <meta charSet="utf-8" />
      <title>TRIZ - アイデアファクトリー</title>
      </Helmet>
      <div id="root"></div>
      <ScriptTag src="https://storage.googleapis.com/idea-factory-js/triz.js" id="external-script" />
      </div>
  )
}
