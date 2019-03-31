import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "gatsby";
import ArrowBack from "../components/arrow_left";
import ArrowForward from "../components/arrow_right";


export default (props) => {
  return (
      <div className="container">
      <h1>{props.title}</h1>
      <div className="row">
      <div className="col-lg">
      <ArrowBack path="/" />
      </div>
      <div className="col-lg-8">
      {props.description}
    </div>
      <div className="col-lg">
      <ArrowForward path={props.to} />
      </div>
      </div>
      </div>
  )
}
