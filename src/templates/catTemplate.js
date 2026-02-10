import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Cat from "../components/Cat/Cat"

const CatTemplate = ({ data }) => {
  const catData = data.highgraph
  return (
    <Layout catData={catData}>
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
          id
          url
          fileName
          title
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
      youngCat(where: { id: $id }) {
        id
        name
        desc {
          markdown
        }
        birthDate
        images {
          id
          url
          fileName
          title
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
              title
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
    }
  }
`
export default CatTemplate
