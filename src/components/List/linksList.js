import * as React from "react";
import PropTypes from "prop-types";
import { LinkHref } from "./linkHref";
import { LinkSpan } from "./linkSpan";
import {
  listItemStyles,
  badgeStyle,
  descriptionStyle,
} from "./../../styles/main.module.css";

const LinksList = (props) => {
  const links = props.links;

  return links.map((link, index) => (
    <li key={index} className={listItemStyles} style={{ color: link.color }}>
      <span>
        {link.url ? <LinkHref link={link} /> : <LinkSpan link={link} />}
        {link.badge && (
          <span className={badgeStyle} aria-label="New Badge">
            NEW!
          </span>
        )}
        <p className={descriptionStyle}>{link.description}</p>
      </span>
    </li>
  ));
};

LinksList.propTypes = {
  links: PropTypes.array.isRequired,
};

export { LinksList };
