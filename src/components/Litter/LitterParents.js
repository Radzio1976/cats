import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./Litter.module.css"

const LitterParents = ({ parents }) => {
  const { language } = useI18next()
  const father = parents.find(p => p.sex === "male")
  const mother = parents.find(p => p.sex === "female")

  return (
    <div className={styles.parents}>
      {[father, mother].map(parent => {
        const image = getImage(parent?.images?.[0]?.localFile)
        return (
          <Link
            to={
              language === "pl"
                ? `/${parent?.sex === "male" ? "kocury" : "kotki"}/${
                    parent?.slug
                  }`
                : language === "en"
                ? `/${parent?.sex === "male" ? "male-cats" : "female-cats"}/${
                    parent?.slug
                  }`
                : `/${parent?.sex === "male" ? "kater" : "katzen"}/${
                    parent?.slug
                  }`
            }
            key={parent?.id}
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
