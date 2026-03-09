import React from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./Header.module.css"

const HeroContent = () => {
  const { t } = useTranslation()
  return (
    <div class={styles.heroContent}>
      <h1 class={styles.heroTitle} data-i18n="home:homehero_title">
        {t("home.hero_title")}
      </h1>

      <p class={styles.heroSubtitle} data-i18n="home:homehero_subtitle">
        {t("home.hero_subtitle")}
      </p>

      <div class={styles.heroButtons}>
        <Link
          to="/"
          className={`${styles.btn} ${styles.btnPrimary}`}
          data-i18n="common:buttons.meet_our_cats"
        >
          {t("buttons.meet_our_cats")}
        </Link>

        <Link
          to={t("paths.available_kittens")}
          className={`${styles.btn} ${styles.btnSecondary}`}
          data-i18n="routes:paths.available_kittens common:buttons.available_kittens"
        >
          {t("buttons.available_kittens")}
        </Link>
      </div>
    </div>
  )
}

export default HeroContent
