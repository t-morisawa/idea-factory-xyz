import {Component} from "react";
import React from "react";
import {PropTypes} from "prop-types";


class ScriptTag extends Component {
  componentDidMount() {
    const {id, src, async} = this.props;
    const script = document.createElement("script");

    script.src = src;
    script.async = async || false;

    document.getElementById(id).replaceWith(script);
  }

  render() {
    const {id} = this.props;
    return <div id={id}/>
  }
}

ScriptTag.propTypes = {
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  async: PropTypes.bool
};

export default ScriptTag
