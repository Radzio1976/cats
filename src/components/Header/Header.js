import React from "react"
import * as styles from "./Header.module.css"
import Logo from "./Logo"
import MainMenu from "./MainMenu"
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"

const Header = ({ location, metaData, catData, litterData, pageContext }) => {
  const pathname = location.pathname
  return (
    <header>
      <section className={styles.logoAndMainMenu}>
        <Logo metaData={metaData} />
        <MainMenu pageContext={pageContext} />
      </section>
      <BreadCrumbs
        location={location}
        catData={catData}
        litterData={litterData}
      />
    </header>
  )
}

export default Header
