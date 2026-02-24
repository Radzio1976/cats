import React from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./Litter.module.css"

const LitterParents = ({ parents }) => {
  const { t } = useTranslation()
  const { language } = useI18next()
  const father = parents.find(p => p.sex === "male")
  const mother = parents.find(p => p.sex === "female")

  return (
    <div className={styles.parents}>
      {[father, mother].map(parent => {
        const image = getImage(parent?.images?.[0]?.localFile)
        return (
          <Link
            to={`${
              parent?.sex === "male"
                ? t("paths.male_cats")
                : t("paths.female_cats")
            }${parent?.slug}`}
            key={parent?.id}
            data-i18n="routes:paths.male_cats routes:paths.female_cats"
          >
            <div className={styles.parentCard}>
              {image && (
                <GatsbyImage
                  image={image}
                  alt={parent?.images[0].fileName}
                  className={styles.parentImage}
                  imgClassName={styles.parentImg}
                />
              )}
              <h2>{parent?.name}</h2>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default LitterParents
