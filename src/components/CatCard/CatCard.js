import React from "react"
import { Link } from "gatsby"
import * as styles from "./CatCard.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CatCard = ({ cat, urlBase, className = "" }) => {
  const imageData = getImage(cat.images?.[0]?.localFile)

  return (
    <li className={`${styles.catCard} ${className}`}>
      <Link to={`${urlBase}/${cat.slug}`} className={styles.cardLink}>
        <div className={styles.imageWrapper}>
          {imageData && (
            <GatsbyImage
              image={imageData}
              alt={cat.name}
              className={styles.catImage}
            />
          )}
        </div>

        <h3 className={styles.catName}>{cat.name}</h3>
      </Link>
    </li>
  )
}

export default CatCard
