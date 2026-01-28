import React, { useState } from "react"
import { Link } from "gatsby"

const Logo = ({ data }) => {
  return (
    <section className="logo">
      <Link to="/">{data.site.siteMetadata?.title || `Title`}</Link>
    </section>
  )
}

export default Logo
