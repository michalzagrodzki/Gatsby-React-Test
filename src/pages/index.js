import * as React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Title } from "./../components/title";
import { Header } from "./../components/header";
import { Icon } from "./../components/icon";
import { LinksList } from "./../components/linksList";
import {
  container,
  linkStyle,
  listStyles,
  docLinkStyle,
} from "./main.module.css";

// query
export const query = graphql`
  query {
    site {
      siteMetadata {
        main {
          title
          header {
            title
            caption
          }
          links {
            text
            url
            description
            color
          }
        }
        about {
          route {
            name
            path
          }
        }
      }
    }
  }
`;

// markup
const IndexPage = ({ data }) => {
  const pageTitle = data.site.siteMetadata.main.title;
  const headerTitle = data.site.siteMetadata.main.header.title;
  const headerCaption = data.site.siteMetadata.main.header.caption;
  const linksList = data.site.siteMetadata.main.links;
  return (
    <main className={container}>
      <Title title={pageTitle} />
      <Header title={headerTitle} caption={headerCaption} />
      <ul className={listStyles}>
        <li className={docLinkStyle}>
          <Link className={linkStyle} to="/about">
            About
          </Link>
        </li>
        <LinksList links={linksList} />
      </ul>
      <Icon />
    </main>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;
