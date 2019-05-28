import React from "react";
import ScriptTag from "../../components/scripttag";

export default () => {
  return (
      <div>
      <div id="root"></div>
      <ScriptTag src="https://storage.googleapis.com/idea-factory-js/factfulness.js" id="external-script" />
      </div>
  )
}