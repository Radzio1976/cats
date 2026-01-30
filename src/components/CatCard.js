import React from "react"
import { Link } from "gatsby"
import * as styles from "./Home/Home.module.css"

const CatCard = ({ cat, urlBase }) => {
  return (
    <li className={styles.catCard}>
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
