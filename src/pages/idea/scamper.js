import React from "react";
import { Helmet } from "react-helmet";
import AppContainer from "../../scamper/containers/AppContainer";

export default () => {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
      <title>SCAMPER - アイデアファクトリー</title>
      </Helmet>
      <AppContainer appType="scamper" />
    </div>
   )
}
