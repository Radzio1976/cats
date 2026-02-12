import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Litter from "../components/Litter/Litter"
import LitterPagination from "../components/Litter/LitterPagination"

const LitterTemplate = ({ data, pageContext }) => {
  const litterData = data.highgraph.litter
  const oldCats = data?.highgraph?.oldCats || []
  const oldMaleCats = oldCats.filter(cat => cat.sex === "male")
  const oldFemaleCats = oldCats.filter(cat => cat.sex === "female")
  return (
    <Layout litterData={litterData} data={{ oldMaleCats, oldFemaleCats }}>
      <Litter litterData={litterData} pageContext={pageContext} />
      <LitterPagination pageContext={pageContext} />
    </Layout>
  )
}
export const query = graphql`
  query LitterPage($id: ID!) {
    highgraph {
      litter(where: { id: $id }) {
        id
        name
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
  }
`
export default LitterTemplate
