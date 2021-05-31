import * as React from "react";
import PropTypes from "prop-types";
import {
  headingStyles,
  headingAccentStyles,
} from "./../styles/main.module.css";

const Header = (props) => {
  const title = props.title;
  const caption = props.caption;
  return (
    <h1 className={headingStyles}>
      {title}
      <br />
      <span className={headingAccentStyles}>{caption}</span>
      <span role="img" aria-label="Party popper emojis">
        🎉🎉🎉
      </span>
    </h1>
  );
};

Header.propTypes = {
  props: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export { Header };
