import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

const LanguageSwitcher = () => {
  const { languages, originalPath } = useI18next()

  return (
    <div>
      {languages.map(lng => (
        <Link
          key={lng}
          to={originalPath}
          language={lng} // <- bardzo ważne, żeby przekazać język
          style={{ marginRight: "10px" }}
        >
          {lng.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}

export default LanguageSwitcher
