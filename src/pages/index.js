import * as React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Header } from "./../components/header";
import { Icon } from "./../components/icon";
import {
  container,
  listItemStyles,
  linkStyle,
  badgeStyle,
  descriptionStyle,
  listStyles,
  docLinkStyle,
} from "./main.module.css";

// query
export const query = graphql`
  query {
    site {
      siteMetadata {
        main {
          links {
            text
            url
            description
            color
          }
        }
      }
    }
  }
`;

// data
function LinksList(props) {
  const links = props.links;
  return links.map((link, index) => (
    <li key={index} className={listItemStyles} style={{ color: link.color }}>
      <span>
        <a
          className={linkStyle}
          href={`${link.url}
              ?utm_source=starter&
              utm_medium=start-page&
              utm_campaign=minimal-starter`}
        >
          {link.text}
        </a>
        {link.badge && (
          <span className={badgeStyle} aria-label="New Badge">
            NEW!
          </span>
        )}
        <p className={descriptionStyle}>{link.description}</p>
      </span>
    </li>
  ));
}
// markup
const IndexPage = ({ data }) => {
  const headerTitle = data.site.siteMetadata.index.header.title;
  const headerCaption = data.site.siteMetadata.index.header.caption;
  return (
    <main className={container}>
      <title>Home Page</title>
      <Header title={headerTitle} caption={headerCaption} />
      <ul className={listStyles}>
        <li className={docLinkStyle}>
          <Link className={linkStyle} to="/about">
            About
          </Link>
        </li>
        <LinksList links={data.site.siteMetadata.main.links} />
      </ul>
      <Icon />
    </main>
  );
};

IndexPage.propTypes = {
  data: PropTypes.string.isRequired,
};

export default IndexPage;
