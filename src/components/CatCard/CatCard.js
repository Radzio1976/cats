import React from "react"
import { Link } from "gatsby"
import * as styles from "./CatCard.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CatCard = ({ cat, urlBase, className = "" }) => {
  const imageData = getImage(cat.images?.[0]?.localFile)

  return (
    <li className={`${styles.catCard} ${className}`}>
      <Link
        to={`${urlBase}/${cat.slug}`}
        className={`${styles.cardLink} oldCatsCatCardCardLink`}
      >
        <div className={`${styles.imageWrapper} oldCatsCatCardImageWrapper`}>
          {imageData && <GatsbyImage image={imageData} alt={cat.name} />}
        </div>

        <h3 className={`${styles.catName} oldCatsCatCardCatName`}>
          {cat.name}
        </h3>
      </Link>
    </li>
  )
}

export default CatCard
