import * as React from "react";
import PropTypes from "prop-types";

const Title = (props) => {
  const title = props.title;
  return <title>{title}</title>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export { Title };
