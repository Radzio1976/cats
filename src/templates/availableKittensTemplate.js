import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import AvailableKittens from "../components/AvailableKittens/AvailableKittens"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const AvailableKittensPage = ({ data, pageContext }) => {
  const oldCats = data?.highgraph?.oldCats || []
  const oldMaleCats = oldCats.filter(cat => cat.sex === "male")
  const oldFemaleCats = oldCats.filter(cat => cat.sex === "female")

  return (
    <Layout data={{ oldMaleCats, oldFemaleCats }} pageContext={pageContext}>
      <AvailableKittens data={data} />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  const { t } = useTranslation()
  return <Seo title={t("menu.home")} />
}

export const query = graphql`
  query ($language: String!) {
    highgraph {
      youngCats {
        id
        name
        slug
        sex
        availability
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
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default AvailableKittensPage
