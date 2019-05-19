import React from "react"
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default (props) => {
  // 現状外部リンクになっているがそのうち統一して内部リンクにすること
  return (
    <Link to={props.path}>
      <FontAwesomeIcon icon={faArrowRight} />
    </Link>
  )
}
