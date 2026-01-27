import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Home from "../components/Home/Home"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const oldCats = data?.highgraph?.oldCats || []
  const oldMaleCats = oldCats.filter(cat => cat.sex === "male")
  const oldFemaleCats = oldCats.filter(cat => cat.sex === "female")
  const litters = data?.highgraph?.litters || []

  return (
    <Layout>
      <Home data={{ oldMaleCats, oldFemaleCats, litters }} />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

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
        }
      }
      litters {
        id
        name
        desc {
          markdown
        }
        images {
          url
          width
          height
        }
        slug
      }
    }
  }
`

export default IndexPage
