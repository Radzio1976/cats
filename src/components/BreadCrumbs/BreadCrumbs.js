import * as React from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./BreadCrumbs.module.css"

const BreadCrumbs = ({ location, catData, litterData }) => {
  const { t } = useTranslation()
  const { language, path } = useI18next()
  const pathname = location.pathname
  const cat = catData?.oldCat || catData?.youngCat
  const litter = litterData

  let pathNameElements = pathname
    .split("/")
    .filter(el => el !== "" && el !== "de" && el !== "en" && el !== "pl")
  if (path === "en/breeding/" || path === "de/zucht/") {
    pathNameElements.shift()
  }

  let breadCrumbs = []
  pathNameElements.forEach((el, i) =>
    breadCrumbs.push({
      name:
        i === pathNameElements.length - 1
          ? cat?.name ||
            litter?.name ||
            el.replace(/-/g, " ").charAt(0).toUpperCase() +
              el.replace(/-/g, " ").slice(1)
          : el.replace(/-/g, " ").charAt(0).toUpperCase() +
            el.replace(/-/g, " ").slice(1),
      path: pathNameElements.slice(0, i + 1).join("/"),
    })
  )

  return (
    <nav className={styles.breadCrumbsMenu}>
      <ul>
        <li>
          <Link
            to={t("paths.home")}
            data-i18n="routes:paths.home common:menu.home"
          >
            {t("menu.home")}
            {` ${breadCrumbs.length > 0 ? " \\" : ""}`}
          </Link>
        </li>
        {breadCrumbs.map((el, i) => (
          <li key={i}>
            <Link to={`/${el.path}`}>
              {el.name} {`${i + 1 === breadCrumbs.length ? "" : " \\"}`}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BreadCrumbs
