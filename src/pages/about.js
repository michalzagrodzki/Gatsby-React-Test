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
        about {
          links {
            text
            description
            color
          }
        }
      }
    }
  }
`;

function LinksList(props) {
  const links = props.links;
  return links.map((link, index) => (
    <li key={index} className={listItemStyles} style={{ color: link.color }}>
      <span>
        <span className={linkStyle}>{link.text}</span>
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
const AboutPage = ({ data }) => {
  const headerTitle = data.site.siteMetadata.about.header.title;
  const headerCaption = data.site.siteMetadata.about.header.caption;
  return (
    <main className={container}>
      <title>About Page</title>
      <Header title={headerTitle} caption={headerCaption} />
      <ul className={listStyles}>
        <li className={docLinkStyle}>
          <Link className={linkStyle} to="/">
            Main Page
          </Link>
        </li>
        <LinksList links={data.site.siteMetadata.about.links} />
      </ul>
      <Icon />
    </main>
  );
};

AboutPage.propTypes = {
  data: PropTypes.string.isRequired,
};

export default AboutPage;
