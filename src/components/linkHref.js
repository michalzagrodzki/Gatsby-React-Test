import * as React from "react";
import PropTypes from "prop-types";
import { linkStyle } from "./../pages/main.module.css";

const LinkHref = (props) => {
  const link = props.link;
  return (
    <a
      className={linkStyle}
      href={`${link.url}
        ?utm_source=starter&
        utm_medium=start-page&
        utm_campaign=minimal-starter`}
    >
      {link.text}
    </a>
  );
};

LinkHref.propTypes = {
  link: PropTypes.object.isRequired,
};

export { LinkHref };
