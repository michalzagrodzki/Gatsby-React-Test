import * as React from "react";
import { Link, graphql } from "gatsby";
import { Icon } from "./../components/icon";
import {
  container,
  listItemStyles,
  linkStyle,
  badgeStyle,
  descriptionStyle,
  headingStyles,
  headingAccentStyles,
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
  return (
    <main className={container}>
      <title>About Page</title>
      <h1 className={headingStyles}>
        About
        <br />
        <span className={headingAccentStyles}>
          — why I have created this site?.
        </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
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

export default AboutPage;
