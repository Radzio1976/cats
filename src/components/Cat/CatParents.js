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
        <Link to={`/${t("links.male_cats")}/${father?.slug}`}>
          {father?.name}
        </Link>
        <Link to={`/${t("links.female_cats")}/${mother?.slug}`}>
          {mother?.name}
        </Link>
      </h3>
    </div>
  )
}

export default CatParents
