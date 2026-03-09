import React from "react"
import { Link } from "gatsby-plugin-react-i18next"
import * as styles from "./CatCard.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CatCard = ({ cat, urlBase, variant }) => {
  const imageData = getImage(cat.images?.[0]?.localFile)

  return (
    <li
      className={[
        styles.catCard,
        variant === "home" && styles.catCardHome,
        variant === "oldCats" && styles.catCardOldCats,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.imageWrapper}>
        {imageData && (
          <GatsbyImage
            image={imageData}
            alt={cat.name}
            className={[
              styles.catImage,
              variant === "oldCats" && styles.catImageOldCats,
            ]
              .filter(Boolean)
              .join(" ")}
            imgClassName={[
              styles.catImg,
              variant === "home" && styles.catImgHome,
              variant === "oldCats" && styles.catImgOldCats,
            ]
              .filter(Boolean)
              .join(" ")}
          />
        )}
      </div>
      <Link to={`${urlBase}${cat.slug}`} className={styles.cardLink}>
        <h3
          className={[styles.catName, variant === "home" && styles.catNameHome]
            .filter(Boolean)
            .join(" ")}
        >
          {cat.name}
        </h3>
      </Link>
    </li>
  )
}

export default CatCard
