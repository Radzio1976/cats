import React from "react"
import { Link } from "gatsby"
import * as styles from "./CatCard.module.css"

const CatCard = ({ cat, urlBase, className = "" }) => {
  return (
    <li className={`${styles.catCard} ${className}`}>
      <Link to={`${urlBase}/${cat.slug}`}>
        <div className="image-wrapper">
          <img
            src={cat.images?.[0]?.url || "/placeholder.jpg"}
            alt={cat.name}
          />
        </div>
        <h3 className={styles.catName}>{cat.name}</h3>
      </Link>
    </li>
  )
}

export default CatCard
