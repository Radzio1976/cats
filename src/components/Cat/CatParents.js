import React from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./Cat.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CatParents = ({ parents }) => {
  const { t } = useTranslation()
  const father = parents.find(p => p.sex === "male")
  const mother = parents.find(p => p.sex === "female")

  return (
    <div className={styles.parents}>
      <h3>
        Rodzice:{" "}
        <Link
          data-i18n="routes:paths.oldMaleCatSingle"
          to={t("paths.oldMaleCatSingle", { catSlug: father?.slug })}
        >
          {father?.name}
        </Link>
        <Link
          data-i18n="routes:paths.oldFemaleCatSingle"
          to={t("paths.oldFemaleCatSingle", { catSlug: mother?.slug })}
        >
          {mother?.name}
        </Link>
      </h3>
    </div>
  )
}

export default CatParents
