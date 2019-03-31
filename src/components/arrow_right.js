import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default (props) => {
  // 現状外部リンクになっているがそのうち統一して内部リンクにすること
  return (
    <a href={props.path}>
      <FontAwesomeIcon icon={faArrowRight} />
    </a>
  )
}
