import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default () => {
  return (
      <div className="container">
      <h1>SCAMPER</h1>
      <div className="row">
      <div className="col-lg">
      <a href="../index.html">
       <FontAwesomeIcon icon={faArrowLeft} />
      </a>
      </div>
      <div className="col-lg-8">
      SCAMPERは新しいアイデアを出すための手法の一種です。
    既存の製品やサービスを7つの観点から見て考えることによって、 新しい製品やサービスのアイデアを生成するのに役立ちます。
    </div>
      <div className="col-lg">
      <a href="https://t-morisawa.github.io/scamper-ja/">
      <FontAwesomeIcon icon={faArrowRight} />
      </a>
      </div>
      </div>
      </div>
  )
}
