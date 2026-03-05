import React from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./Header.module.css"
import LanguageSwitcher from "./LanguageSwitcher"
const MainMenu = ({ pageContext }) => {
  const { t } = useTranslation()
  const { path, language } = useI18next()

  return (
    <>
      <nav className={styles.heroNav} aria-label="Główna nawigacja">
        <ul className={styles.heroMenu}>
          <li>
            <Link
              className={`${
                language === "pl"
                  ? path === t("paths.home")
                    ? styles.borderBottomVisible
                    : styles.borderBottomHidden
                  : path === language + t("paths.home")
                  ? styles.borderBottomVisible
                  : styles.borderBottomHidden
              }`}
              to={t("paths.home")}
              data-i18n="routes:paths.home common:menu.home"
            >
              {t("menu.home")}
            </Link>
          </li>
          <li>
            <Link
              className={`${
                path.includes(t("paths.about_us"))
                  ? styles.borderBottomVisible
                  : styles.borderBottomHidden
              }`}
              to={t("paths.about_us")}
              data-i18n="routes:paths.about_us common:menu.about_us"
            >
              {t("menu.about_us")}
            </Link>
          </li>
          <li>
            <Link
              className={`${
                path.includes(t("paths.male_cats"))
                  ? styles.borderBottomVisible
                  : styles.borderBottomHidden
              }`}
              to={t("paths.male_cats")}
              data-i18n="routes:paths.male_cats common:menu.male_cats"
            >
              {t("menu.male_cats")}
            </Link>
          </li>
          <li>
            <Link
              className={`${
                path.includes(t("paths.female_cats"))
                  ? styles.borderBottomVisible
                  : styles.borderBottomHidden
              }`}
              to={t("paths.female_cats")}
              data-i18n="routes:paths.female_cats common:menu.female_cats"
            >
              {t("menu.female_cats")}
            </Link>
          </li>
          <li>
            <Link
              className={`${
                path.includes(t("paths.available_kittens"))
                  ? styles.borderBottomVisible
                  : styles.borderBottomHidden
              }`}
              to={t("paths.available_kittens")}
              data-i18n="routes:paths.available_kittens common:menu.available_kittens"
              style={{ whiteSpace: "pre-line" }}
            >
              {t("menu.available_kittens")}
            </Link>
          </li>
          <li>
            <Link
              className={`${
                path.includes(t("paths.litters"))
                  ? styles.borderBottomVisible
                  : styles.borderBottomHidden
              }`}
              to={t("paths.litters")}
              data-i18n="routes:paths.litters common:menu.litters"
            >
              {t("menu.litters")}
            </Link>
          </li>
          <li>
            <Link
              className={`${
                path.includes(t("paths.faq"))
                  ? styles.borderBottomVisible
                  : styles.borderBottomHidden
              }`}
              to={t("paths.faq")}
              data-i18n="routes:paths.faq common:menu.faq"
            >
              {t("menu.faq")}
            </Link>
          </li>
          <li>
            <Link
              className={`${
                path.includes(t("paths.contact"))
                  ? styles.borderBottomVisible
                  : styles.borderBottomHidden
              }`}
              to={t("paths.contact")}
              data-i18n="routes:paths.contact common:menu.contact"
            >
              {t("menu.contact")}
            </Link>
          </li>
          <LanguageSwitcher pageContext={pageContext} />
        </ul>
      </nav>
    </>
  )
}

export default MainMenu
