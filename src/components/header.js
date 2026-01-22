import React, { useState } from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <section className="logo">
        <Link to="/">{siteTitle}</Link>
      </section>
      <nav className="menu" aria-label="Główna nawigacja">
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/o-nas">O nas</Link>
          </li>

          <li className="has-submenu">
            <button
              onClick={() => setIsOpen(prev => !prev)}
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              Dojrzałe koty
            </button>
            {isOpen && (
              <ul
                className="submenu"
                style={{ display: isOpen ? "block" : "none" }}
              >
                <li>
                  <Link to="/dojrzale-koty/kocury">Kocury</Link>
                </li>

                <li>
                  <Link to="/dojrzale-koty/kotki">Kotki</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
