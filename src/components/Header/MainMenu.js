import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./Header.module.css"
import LanguageSwitcher from "./LanguageSwitcher"
const MainMenu = () => {
  const { t } = useTranslation()

  return (
    <>
      <nav className={styles.mainMenu} aria-label="Główna nawigacja">
        <ul>
          <li>
            <Link to="/">{t("header.main_menu.home")}</Link>
          </li>
          <li>
            <Link to="/o-nas">{t("header.main_menu.about_us")}</Link>
          </li>
          <li>
            <Link to="/kocury">{t("header.main_menu.male_cats")}</Link>
          </li>
          <li>
            <Link to="/kotki">{t("header.main_menu.female_cats")}</Link>
          </li>
          <li>
            <Link to="/mioty">{t("header.main_menu.litters")}</Link>
          </li>
          <li>
            <Link to="/kontakt">{t("header.main_menu.contact")}</Link>
          </li>
          <LanguageSwitcher />
        </ul>
      </nav>
    </>
  )
}

export default MainMenu
