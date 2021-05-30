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
  return (
    <main className={container}>
      <title>Home Page</title>
      <h1 className={headingStyles}>
        Welcome
        <br />
        <span className={headingAccentStyles}>
          — this is my first Gatsby site.{" "}
        </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
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

export default IndexPage;
