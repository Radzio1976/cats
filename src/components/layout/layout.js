import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

import Header from "../Header/Header"
import Footer from "../footer"
import "../styles/global.css"
import * as styles from "./layout.module.css"

const Layout = ({ catData, litterData, children }) => {
  const location = useLocation()

  const data = useStaticQuery(graphql`
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
        data={data}
        catData={catData}
        litterData={litterData}
      />
      <div className={styles.mainWrapper}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
