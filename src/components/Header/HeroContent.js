import React from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./Header.module.css"

const HeroContent = () => {
  return (
    <div class={styles.heroContent}>
      <h1 class={styles.heroTitle}>
        Rodowodowe Maine Coony z domowej hodowli FPL/FIFe
      </h1>

      <p class={styles.heroSubtitle}>
        Zdrowe, socjalizowane i pełne charakteru koty wychowane z miłością.
      </p>

      <div class={styles.heroButtons}>
        <Link to="/" className={`${styles.btn} ${styles.btnPrimary}`}>
          Poznaj nasze koty
        </Link>

        <Link to="/" className={`${styles.btn} ${styles.btnSecondary}`}>
          Dostępne kocięta
        </Link>
      </div>
    </div>
  )
}

export default HeroContent
