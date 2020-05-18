import React from "react";
import { Link } from "gatsby";
import stylesOrg from '../styles/index.module.css';


export default () => {
  return (
      <header className={stylesOrg.header}>
      <Link to="/">Idea Factory XYZ</Link>
      </header>
  )
}
