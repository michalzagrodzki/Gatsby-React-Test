import * as React from "react"
import { Link } from "gatsby"
import { container, listItemStyles, linkStyle, badgeStyle, descriptionStyle, headingStyles, headingAccentStyles, listStyles, docLinkStyle} from "./about.module.css"

// data
const links = [
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
];
function LinksList(props) {
  const links = props.links;
  return (links.map(link => 
    <li key={link.url} class={listItemStyles}>
      <span>
        <a
          class={linkStyle}
          href=""
        >
          {link.text}
        </a>
        {link.badge && (
          <span class={badgeStyle} aria-label="New Badge">
            NEW!
          </span>
        )}
        <p class={descriptionStyle}>{link.description}</p>
      </span>
    </li>
  ));
};

// markup
const IndexPage = () => {
  return (
    <main className={container}>
      <title>About Page</title>
      <h1 className={headingStyles}>
        About
        <br />
        <span className={headingAccentStyles}>— why I have created this site?.</span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <ul className={listStyles}>
        <li className={docLinkStyle}>
          <Link className={linkStyle} to="/">Main Page</Link>
        </li> 
        <LinksList links={links} />
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage