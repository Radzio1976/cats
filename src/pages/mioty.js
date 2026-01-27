import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const LittersPage = ({ data }) => {
  const litters = data?.highgraph?.litters || []
  console.log(litters)

  return (
    <Layout>
      <div
        className="main-cats-and-litters-section"
        style={{ display: "flex", justifyContent: "space-between" }}
      ></div>
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
      litters {
        id
        images {
          id
          url
        }
        name
        slug
      }
    }
  }
`

export default LittersPage
