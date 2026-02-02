import React from "react"
import * as styles from "./Header.module.css"
import Logo from "./Logo"
import MainMenu from "./MainMenu"
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"

const Header = ({ location, data, catData, litterData }) => {
  return (
    <header>
      <section className={styles.logoAndMainMenu}>
        <Logo data={data} />
        <MainMenu />
      </section>
      <BreadCrumbs
        location={location}
        data={data}
        catData={catData}
        litterData={litterData}
      />
    </header>
  )
}

export default Header
