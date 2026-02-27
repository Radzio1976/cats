import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Litter from "../components/Litter/Litter"

const LitterTemplate = ({ data, pageContext }) => {
  const litterData = data?.highgraph?.litter
  const oldCats = data?.highgraph?.oldCats || []
  const oldMaleCats = oldCats.filter(cat => cat.sex === "male")
  const oldFemaleCats = oldCats.filter(cat => cat.sex === "female")

  return (
    <Layout
      litterData={litterData}
      data={{ oldMaleCats, oldFemaleCats }}
      pageContext={pageContext}
    >
      <Litter litterData={litterData} pageContext={pageContext} />
    </Layout>
  )
}
export const query = graphql`
  query LitterPage($id: ID!) {
    # Pobranie wszystkich tłumaczeń dla pluginu
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }

    highgraph {
      litter(where: { id: $id }) {
        id
        namePL
        nameEN
        nameDE
        pl
        en
        de
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
          availability
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
          litter {
            ... on HIGHGRAPH_Litter {
              id
              namePL
              namePL
              nameDE
              parents {
                ... on HIGHGRAPH_OldCat {
                  id
                  name
                  sex
                  slug
                }
              }
            }
          }
        }
      }

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
    }
  }
`

export default LitterTemplate
