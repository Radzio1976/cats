import React from "react"
import { Link } from "gatsby"
import * as styles from "./Header.module.css"

const Logo = ({ data }) => {
  return (
    <section className={styles.logo}>
      <Link to="/">{data.site.siteMetadata?.title || `Title`}</Link>
    </section>
  )
}

export default Logo
