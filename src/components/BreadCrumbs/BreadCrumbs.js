import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./BreadCrumbs.module.css"

const BreadCrumbs = ({ location, data, catData, litterData }) => {
  const pathname = location.pathname
  const cat = catData?.oldCat || catData?.youngCat
  const litter = litterData

  let pathNameElements = pathname.split("/").filter(el => el !== "")
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
          <Link to="/">{`Home ${breadCrumbs.length > 0 ? " \\" : ""}`}</Link>
        </li>
        {breadCrumbs.map((el, i) => (
          <li>
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
