import React from "react"
import * as styles from "./Header.module.css"
import Logo from "./Logo"
import MainMenu from "./MainMenu"
import HeroContent from "./HeroContent"
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"

const Header = ({ location, catData, litterData, pageContext }) => {
  const pathname = location.pathname
  return (
    <>
      <header class={styles.hero}>
        <div class={styles.heroOverlay}>
          <div class={styles.heroInner}>
            <div class={styles.heroTop}>
              <Logo />
              <MainMenu pageContext={pageContext} />
            </div>
            <HeroContent />
          </div>
        </div>
      </header>
      <BreadCrumbs
        location={location}
        catData={catData}
        litterData={litterData}
      />
    </>
  )
}

export default Header

// import React from "react"
// import * as styles from "./Header.module.css"
// import Logo from "./Logo"
// import MainMenu from "./MainMenu"
// import Baner from "./Baner"
// import BreadCrumbs from "../BreadCrumbs/BreadCrumbs"

// const Header = ({ location, metaData, catData, litterData, pageContext }) => {
//   const pathname = location.pathname
//   return (
//     <header>
//       <section className={styles.logoAndMainMenu}>
//         <Logo metaData={metaData} />
//         <MainMenu pageContext={pageContext} />
//       </section>
//       <section className={styles.baner}>
//         <Baner metaData={metaData} />
//       </section>
//       <BreadCrumbs
//         location={location}
//         catData={catData}
//         litterData={litterData}
//       />
//     </header>
//   )
// }

// export default Header
