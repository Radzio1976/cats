import * as React from "react"
import { graphql } from "gatsby"
import { useLocation } from "@reach/router"

import Layout from "../components/layout/layout"
import OldCats from "../components/OldCats/OldCats"
import Seo from "../components/seo"

const OldFemaleCatsPage = ({ data }) => {
  const location = useLocation()
  const oldCats = data?.highgraph?.oldCats || []
  const oldMaleCats = oldCats.filter(cat => cat.sex === "male")
  const oldFemaleCats = oldCats.filter(cat => cat.sex === "female")
  console.log(oldCats)

  return (
    <Layout data={{ oldMaleCats, oldFemaleCats }}>
      <OldCats oldCats={oldCats} location={location} />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Kotki" />

export const query = graphql`
  query {
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
  }
`

export default OldFemaleCatsPage
