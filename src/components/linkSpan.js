import * as React from "react";
import PropTypes from "prop-types";
import { linkStyle } from "./../pages/main.module.css";

const LinkSpan = (props) => {
  const link = props.link;
  return <span className={linkStyle}>{link.text}</span>;
};

LinkSpan.propTypes = {
  link: PropTypes.object.isRequired,
};

export { LinkSpan };
