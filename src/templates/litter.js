import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import LitterPage from "../components/LitterPage"

const Litter = ({ data }) => {
  const litterData = data.highgraph.litter
  return (
    <Layout>
      <LitterPage litterData={litterData} />
    </Layout>
  )
}
export const query = graphql`
  query LitterPage($id: ID!) {
    highgraph {
      litter(where: { id: $id }) {
        id
        litterName
        images {
          id
          url
        }
        child {
          name
          images {
            url
          }
          parent {
            ... on HIGHGRAPH_OldCat {
              id
              name
              sex
              slug
              images {
                id
                url
              }
            }
          }
        }
      }
    }
  }
`
export default Litter
