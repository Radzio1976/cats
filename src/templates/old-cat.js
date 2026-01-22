import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const OldCat = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>{data.highgraph.oldCat.name}</h1>
    </Layout>
  )
}
export const query = graphql`
  query CatPage($id: ID!) {
    highgraph {
      oldCat(where: { id: $id }) {
        name
        images {
          url
        }
      }
    }
  }
`
export default OldCat
