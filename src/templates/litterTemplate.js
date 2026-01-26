import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import LitterPage from "../components/LitterPage"

const LitterTemplate = ({ data, pageContext }) => {
  console.log(pageContext)
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
        slug
        images {
          id
          url
        }
        parents {
          ... on HIGHGRAPH_OldCat {
            id
            name
            sex
            images {
              id
              url
              fileName
            }
          }
        }
        children {
          id
          name
          sex
          slug
          desc {
            markdown
          }
          images {
            id
            url
            fileName
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
  }
`
export default LitterTemplate
