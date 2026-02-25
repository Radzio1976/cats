import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"

import Header from "../Header/Header"
import Footer from "../footer"
import CatCard from "../CatCard/CatCard"
import "../styles/global.css"
import * as styles from "./layout.module.css"

const Layout = ({ data, catData, litterData, children, pageContext }) => {
  const { t } = useTranslation()
  const location = useLocation()
  const { oldMaleCats, oldFemaleCats } = data

  const metaData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteURL
        }
      }
    }
  `)

  return (
    <>
      <Header
        location={location}
        metaData={metaData}
        catData={catData}
        litterData={litterData}
        pageContext={pageContext}
      />
      <div className={styles.mainWrapper}>
        <main>
          <section className={styles.mainLeftColumn}>
            <ul>
              {oldMaleCats.map(cat => (
                <CatCard
                  data-i18n="routes:paths.male_cats"
                  key={cat.id}
                  cat={cat}
                  urlBase={t("paths.male_cats")}
                  variant="layout"
                />
              ))}
            </ul>
          </section>
          <section className={styles.mainMiddleColumn}>{children}</section>
          <section className={styles.mainRightColumn}>
            <ul>
              {oldFemaleCats.map(cat => (
                <CatCard
                  data-i18n="routes:paths.female_cats"
                  key={cat.id}
                  cat={cat}
                  urlBase={t("paths.female_cats")}
                  variant="layout"
                />
              ))}
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
