import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "gatsby";


export default (props) => {
  return (
      <Link to={props.path}>
      <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
  )
}
