import React from "react"
import 'bootstrap/dist/css/bootstrap.css';


export default () => {
  return (
      <div className="container">
          <h1>アイデアファクトリー</h1>
          <div className="row">
              <div className="col-lg"></div>
              <div className="col-lg-8">
              <div className="d-flex flex-row justify-content-between">
                  <div className="p-3">自分に何ができるかを考える</div>
                  <div className="p-3">SWOT</div>
              </div>
              <div className="d-flex flex-row justify-content-between">
                  <div className="p-3">アイデアを出す</div>
                  <div className="p-3">ブレインストーミング</div>
              </div>
              <a href="./description/scamper.html">
              <div className="d-flex flex-row justify-content-between">
                  <div className="p-3">作ったアイデアにひねりを加える</div>
                  <div className="p-3">SCAMPER</div>
              </div>
              </a>
              <a href="./description/triz.html">
                  <div className="d-flex flex-row justify-content-between">
                      <div className="p-3">5分で発明する</div>
                      <div className="p-3">TRIZ</div>
                  </div>
              </a>
              <div className="d-flex flex-row justify-content-between">
                  <div className="p-3">作ったアイデアを普及させる</div>
                  <div className="p-3">AIDMA</div>
              </div>
              <div className="d-flex flex-row justify-content-between">
                  <div className="p-3">マーケティングにオススメの書籍</div>
                  <div className="p-3"></div>
              </div>
          </div>
          <div className="col-lg"></div>
          </div>
      </div>
  )
}
