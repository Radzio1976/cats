import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

const LanguageSwitcher = () => {
  const { language, languages, originalPath, path } = useI18next()

  return (
    <div style={{ padding: "15px" }}>
      {languages.map(lng => (
        <Link
          key={lng}
          to={`${lng === "pl" ? "/" : lng === "en" ? "/breeding" : "/zucht"}`}
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
