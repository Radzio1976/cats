import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header style={{ display: "flex", justifyContent: "space-between" }}>
    <section className="logo">
      <Link to="/">{siteTitle}</Link>
    </section>
    <section className="nav">
      <Link to="/">Home</Link>
      <Link to="/o-nas">O nas</Link>
      <Link to="/kontakt">Kontakt</Link>
    </section>
  </header>
)

export default Header
