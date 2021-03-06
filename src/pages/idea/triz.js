import React from "react";
import { Helmet } from "react-helmet";
import AppContainer from "../../scamper/containers/AppContainer";

export default () => {
  return (
      <div>
      <Helmet>
      <meta charSet="utf-8" />
      <title>TRIZ - アイデアファクトリー</title>
      </Helmet>
      <AppContainer appType="triz" />
      </div>
  )
}
