import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Litters from "../components/Litters/Litters"
import Seo from "../components/seo"

const LittersPage = ({ data }) => {
  const oldCats = data?.highgraph?.oldCats || []
  const oldMaleCats = oldCats.filter(cat => cat.sex === "male")
  const oldFemaleCats = oldCats.filter(cat => cat.sex === "female")
  const litters = data?.highgraph?.litters || []
  console.log(litters)

  return (
    <Layout data={{ oldMaleCats, oldFemaleCats }}>
      <Litters litters={litters} />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Dojrzałe koty" />

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
      litters {
        id
        images {
          id
          url
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
        name
        slug
      }
    }
  }
`

export default LittersPage
