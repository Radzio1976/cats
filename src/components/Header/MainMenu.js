import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./Header.module.css"
import LanguageSwitcher from "./LanguageSwitcher"
const MainMenu = () => {
  const { t } = useTranslation()
  console.log(t("header.menu"))

  return (
    <>
      <nav className={styles.mainMenu} aria-label="Główna nawigacja">
        <ul>
          <li>
            <Link
              to={t("header.menu.home.path")}
              data-i18n="header.menu.home.path"
            >
              {t("header.menu.home.label")}
            </Link>
          </li>
          <li>
            <Link
              to={t("header.menu.about_us.path")}
              data-i18n="header.menu.about_us.path"
            >
              {t("header.menu.about_us.label")}
            </Link>
          </li>
          <li>
            <Link
              to={t("header.menu.male_cats.path")}
              data-i18n="header.menu.male_cats.path"
            >
              {t("header.menu.male_cats.label")}
            </Link>
          </li>
          <li>
            <Link
              to={t("header.menu.female_cats.path")}
              data-i18n="header.menu.female_cats.path"
            >
              {t("header.menu.female_cats.label")}
            </Link>
          </li>
          <li>
            <Link
              to={t("header.menu.litters.path")}
              data-i18n="header.menu.litters.path"
            >
              {t("header.menu.litters.label")}
            </Link>
          </li>
          <li>
            <Link
              to={t("header.menu.contact.path")}
              data-i18n="header.menu.contact.path"
            >
              {t("header.menu.contact.label")}
            </Link>
          </li>
          <LanguageSwitcher />
        </ul>
      </nav>
    </>
  )
}

export default MainMenu
