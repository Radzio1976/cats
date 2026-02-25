import * as React from "react"
import { graphql } from "gatsby"
import { useLocation } from "@reach/router"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout/layout"
import OldCats from "../components/OldCats/OldCats"
import Seo from "../components/seo"

const OldFemaleCatsPage = ({ data, pageContext }) => {
  const location = useLocation()
  const oldCats = data?.highgraph?.oldCats || []
  const oldMaleCats = oldCats.filter(cat => cat.sex === "male")
  const oldFemaleCats = oldCats.filter(cat => cat.sex === "female")

  return (
    <Layout data={{ oldMaleCats, oldFemaleCats }} pageContext={pageContext}>
      <OldCats oldCats={oldCats} location={location} />
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
  return <Seo title={t("menu.female_cats")} />
}

export const query = graphql`
  query ($language: String!) {
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

export default OldFemaleCatsPage
