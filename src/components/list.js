import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { LinksList } from "./List/linksList";
import {
  linkStyle,
  listStyles,
  docLinkStyle,
} from "./../pages/main.module.css";

const List = (props) => {
  const links = props.links;
  const route = {
    path: props.route.path,
    name: props.route.name,
  };

  return (
    <ul className={listStyles}>
      <li className={docLinkStyle}>
        <Link className={linkStyle} to={route.path}>
          {route.name}
        </Link>
      </li>
      <LinksList links={links} />
    </ul>
  );
};

List.propTypes = {
  links: PropTypes.array.isRequired,
  route: PropTypes.object.isRequired,
};

export { List };
