import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "gatsby";


export default (props) => {
  // 現状外部リンクになっているがそのうち統一して内部リンクにすること
  return (
      <a href={props.path}>
      <FontAwesomeIcon icon={faArrowRight} />
      </a>
  )
}
