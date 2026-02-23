import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import polandFlag from "../../images/language-switcher-flags/poland.png"
import unitedKingdomFlag from "../../images/language-switcher-flags/united-kingdom.png"
import germanyFlag from "../../images/language-switcher-flags/germany.png"

const languageConfig = {
  pl: {
    flag: polandFlag,
    label: "Polski",
  },
  en: {
    flag: unitedKingdomFlag,
    label: "English",
  },
  de: {
    flag: germanyFlag,
    label: "Deutsch",
  },
}

const LanguageSwitcher = () => {
  const { languages, language } = useI18next()

  return (
    <div style={{ padding: "15px" }}>
      {languages.map(lng => {
        const config = languageConfig[lng]
        return (
          <Link
            key={lng}
            to={`${lng === "pl" ? "/" : lng === "en" ? "/breeding" : "/zucht"}`}
            language={lng} // <- bardzo ważne, żeby przekazać język
            style={{ marginRight: "10px" }}
          >
            {language !== lng ? (
              <img src={config.flag} alt={config.label} width={24} />
            ) : null}
          </Link>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
