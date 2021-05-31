import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Title } from "./../components/title";
import { Header } from "./../components/header";
import { Icon } from "./../components/icon";
import { List } from "./../components/list";
import { container } from "./../styles/main.module.css";

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
  const route = {
    path: data.site.siteMetadata.main.route.path,
    name: data.site.siteMetadata.main.route.name,
  };
  return (
    <main className={container}>
      <Title title={pageTitle} />
      <Header title={headerTitle} caption={headerCaption} />
      <List links={linksList} route={route} />
      <Icon />
    </main>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;
