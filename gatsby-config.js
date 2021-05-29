/* eslint-disable max-len */
/* eslint-disable-next-line no-undef */
module.exports = {
  siteMetadata: {
    title: "Gatsby-Test",
    main: {
      links: [
        {
          text: "Tutorial",
          url: "https://www.gatsbyjs.com/docs/tutorial/",
          description:
            "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
          color: "#E95800",
        },
        {
          text: "How to Guides",
          url: "https://www.gatsbyjs.com/docs/how-to/",
          description:
            "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
          color: "#1099A8",
        },
        {
          text: "Reference Guides",
          url: "https://www.gatsbyjs.com/docs/reference/",
          description:
            "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
          color: "#BC027F",
        },
        {
          text: "Conceptual Guides",
          url: "https://www.gatsbyjs.com/docs/conceptual/",
          description:
            "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
          color: "#0D96F2",
        },
        {
          text: "Plugin Library",
          url: "https://www.gatsbyjs.com/plugins",
          description:
            "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
          color: "#8EB814",
        },
        {
          text: "Build and Host",
          url: "https://www.gatsbyjs.com/cloud",
          badge: true,
          description:
            "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
          color: "#663399",
        },
      ],
    },
    about: {
      links: [
        {
          text: "Learn new technology",
          description:
            "Gatsby is good introduction to creating simple projects with React. Many elements of build process are automated, which removes overhead.",
          color: "#E95800",
        },
        {
          text: "New approach",
          description:
            "Create landing pages with use of modern technologies and their advantages",
          color: "#BC027F",
        },
        {
          text: "New methods for deployment of landing pages",
          description:
            "Deploy landing pages to cloud providers with use of CI/CD",
          color: "#663399",
        },
      ],
    },
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-prettier-eslint",
      options: {
        watch: true,
        prettierLast: true,
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}"
            // is not used because we will rely on `eslint --fix`
            "**/*.{css,scss,less}",
            "**/*.{json,json5}",
            "**/*.{graphql}",
            "**/*.{md,mdx}",
            "**/*.{html}",
            "**/*.{yaml,yml}",
          ],
        },
        eslint: {
          patterns: "**/*.{js,jsx,ts,tsx}",
          formatter: "stylish",
          maxWarnings: undefined,
          emitWarning: true,
          failOnError: false,
          failOnWarning: false,
          plugins: [],
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
  ],
};
