import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Cat from "../components/Cat/Cat"

const CatTemplate = ({ data }) => {
  const catData = data.highgraph
  return (
    <Layout>
      <Cat catData={catData} />
    </Layout>
  )
}
export const query = graphql`
  query CatPage($id: ID!) {
    highgraph {
      oldCat(where: { id: $id }) {
        id
        name
        desc {
          markdown
        }
        birthDate
        images {
          url
        }
      }
      youngCat(where: { id: $id }) {
        id
        name
        desc {
          markdown
        }
        birthDate
        images {
          url
        }
        parents {
          ... on HIGHGRAPH_OldCat {
            id
            name
            sex
            slug
            images {
              id
              url
              fileName
            }
          }
        }
      }
    }
  }
`
export default CatTemplate
