import React from "react"
import { Link } from "gatsby-plugin-react-i18next"
import headerImage from "../../images/header_image.jpg"
import * as styles from "./Header.module.css"

const Logo = ({ data }) => {
  return (
    <section className={styles.logo}>
      <Link to="/">
        <img src={headerImage} alt="Logo" />
      </Link>
    </section>
  )
}

export default Logo
