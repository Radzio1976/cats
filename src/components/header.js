import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <section className="logo"></section>
    <section className="nav">
      <Link to="/">Home</Link>
      <Link to="/o-nas">O nas</Link>
      <Link to="/kontakt">Kontakt</Link>
    </section>
  </header>
)

export default Header
