import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "cy-logo.png" }) {
        childImageSharp {
          fixed(width: 160, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Link to="/" >
      <Img
        fixed={data.logoImage.childImageSharp.fixed}
        alt="Corona Yardim Logo"
        title="Corona Yardım Logo"
        style={{ marginBottom: 0 }}
      />
    </Link>
  )
}

export default Logo
