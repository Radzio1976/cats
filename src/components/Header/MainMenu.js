import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./Header.module.css"
import LanguageSwitcher from "./LanguageSwitcher"
const MainMenu = () => {
  const { t } = useTranslation()

  console.log(t("menu.home"))

  return (
    <>
      <nav className={styles.mainMenu} aria-label="Główna nawigacja">
        <ul>
          <li>
            <Link
              to={t("paths.home")}
              data-i18n-route="routes:paths.home"
              data-i18n-label="common:menu.home"
            >
              {t("menu.home")}
            </Link>
          </li>
          <li>
            <Link
              to={t("paths.about_us")}
              data-i18n-route="routes:paths.about_us"
              data-i18n-label="common:menu.about_us"
            >
              {t("menu.about_us")}
            </Link>
          </li>
          <li>
            <Link
              to={t("paths.male_cats")}
              data-i18n-route="routes:paths.male_cats"
              data-i18n-label="common:menu.male_cats"
            >
              {t("menu.male_cats")}
            </Link>
          </li>
          <li>
            <Link
              to={t("paths.female_cats")}
              data-i18n-route="routes:paths.female_cats"
              data-i18n-label="common:menu.female_cats"
            >
              {t("menu.female_cats")}
            </Link>
          </li>
          <li>
            <Link
              to={t("paths.litters")}
              data-i18n-route="routes:paths.litters"
              data-i18n-label="common:menu.litters"
            >
              {t("menu.litters")}
            </Link>
          </li>
          <li>
            <Link
              to={t("paths.contact")}
              data-i18n-route="routes:paths.contact"
              data-i18n-label="common:menu.contact"
            >
              {t("menu.contact")}
            </Link>
          </li>
          <LanguageSwitcher />
        </ul>
      </nav>
    </>
  )
}

export default MainMenu
