import React from "react"
import * as styles from "./Header.module.css"
import Logo from "./Logo"
import MainMenu from "./MainMenu"
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"

const Header = ({ location, metaData, catData, litterData }) => {
  const pathname = location.pathname
  console.log(location)
  return (
    <header>
      <section className={styles.logoAndMainMenu}>
        <Logo metaData={metaData} />
        <MainMenu />
      </section>
      {pathname !== "/" && (
        <BreadCrumbs
          location={location}
          catData={catData}
          litterData={litterData}
        />
      )}
    </header>
  )
}

export default Header
