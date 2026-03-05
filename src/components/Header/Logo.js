import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
// import headerImage from "../../images/header_image.jpg"
import headerImage from "../../images/baner.png"
import logo from "../../images/logo.png"
import * as styles from "./Header.module.css"

const Logo = () => {
  const { t } = useTranslation()
  return (
    <div class={styles.heroLogo}>
      <Link data-i18n="routes:paths.home" to={t("paths.home")}>
        <img src={logo} alt="Happy Dwarf Maine Coon Cattery" />
      </Link>
    </div>
  )
}

export default Logo
