import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import AboutUs from "../components/AboutUs/AboutUs"
import Seo from "../components/seo"

const AboutUsPageDe = ({ data }) => {
  const oldCats = data?.highgraph?.oldCats || []
  const oldMaleCats = oldCats.filter(cat => cat.sex === "male")
  const oldFemaleCats = oldCats.filter(cat => cat.sex === "female")

  return (
    <Layout data={{ oldMaleCats, oldFemaleCats }}>
      <AboutUs />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Über uns" />

export const query = graphql`
  query ($language: String!) {
    highgraph {
      oldCats {
        id
        name
        slug
        sex
        desc {
          markdown
        }
        images {
          url
          width
          height
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1200
                quality: 70
                placeholder: BLURRED
                formats: [WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default AboutUsPageDe
