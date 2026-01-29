import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import OldCats from "../components/OldCats/OldCats"
import Seo from "../components/seo"

const OldCatsPage = ({ data }) => {
  const oldCats = data?.highgraph?.oldCats || []
  console.log(oldCats)

  return (
    <Layout>
      <div
        className="main-cats-and-litters-section"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <OldCats oldCats={oldCats} />
      </div>
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
        }
      }
    }
  }
`

export default OldCatsPage
