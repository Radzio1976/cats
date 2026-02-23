import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import headerImage from "../../images/header_image.jpg"
import * as styles from "./Header.module.css"

const Logo = () => {
  const { t } = useTranslation()
  return (
    <section className={styles.logo}>
      <Link data-i18n="routes:paths.home" to={t("paths.home")}>
        <img src={headerImage} alt="Logo" />
      </Link>
    </section>
  )
}

export default Logo
