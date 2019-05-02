import React from "react";
import ScriptTag from "../../components/scripttag";

export default () => {
  const id = Math.random().toString();

  return (
      <div>
      <div id="root"></div>
      <ScriptTag src="https://epic-mayer-262a99.netlify.com/js/idea-raw/triz.js" id={id} />
      </div>
  )
}
