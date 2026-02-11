import React, { useState } from "react"
import { Link } from "gatsby"
import * as styles from "./Header.module.css"
const MainMenu = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className={styles.mainMenu} aria-label="Główna nawigacja">
        <ul>
          <li>
            <Link to="/">Hodowla</Link>
          </li>
          <li>
            <Link to="/kocury">Kocury</Link>
          </li>
          <li>
            <Link to="/kotki">Kotki</Link>
          </li>

          {/* <li className="has-submenu">
            <button
              onClick={() => setIsOpen(prev => !prev)}
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
            <Link to="/dojrzale-koty">Dojrzałe koty</Link>
            </button>
            {isOpen && (
              <ul className="submenu">
                <li>
                  <Link to="/dojrzale-koty/kocury">Kocury</Link>
                </li>

                <li>
                  <Link to="/dojrzale-koty/kotki">Kotki</Link>
                </li>
              </ul>
            )}
          </li> */}
          <li>
            <Link to="/mioty">Mioty</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MainMenu
