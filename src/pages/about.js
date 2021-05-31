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
        about {
          title
          header {
            title
            caption
          }
          links {
            text
            description
            color
          }
        }
        main {
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
const AboutPage = ({ data }) => {
  const pageTitle = data.site.siteMetadata.about.title;
  const headerTitle = data.site.siteMetadata.about.header.title;
  const headerCaption = data.site.siteMetadata.about.header.caption;
  const linksList = data.site.siteMetadata.about.links;
  return (
    <main className={container}>
      <Title title={pageTitle} />
      <Header title={headerTitle} caption={headerCaption} />
      <ul className={listStyles}>
        <li className={docLinkStyle}>
          <Link className={linkStyle} to="/">
            Main Page
          </Link>
        </li>
        <LinksList links={linksList} />
      </ul>
      <Icon />
    </main>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;
