import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./Home/Home.module.css"

const LitterCard = ({ litter, urlBase }) => {
  return (
    <li className={styles.litterCard}>
      <Link to={`/mioty/${litter.slug}`}>
        <div className="image-wrapper">
          <img
            src={litter.images?.[0]?.url || "/placeholder.jpg"}
            alt={litter.name}
          />
        </div>
        <h3 className={styles.litterName}>{litter.name}</h3>
      </Link>
    </li>
  )
}

export default LitterCard
