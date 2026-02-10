import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./LitterCard.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LitterCard = ({ litter, urlBase, className }) => {
  const image = getImage(litter.images?.[0]?.localFile)
  return (
    <li className={`${styles.litterCard} ${className}`}>
      <Link to={`/mioty/${litter.slug}`}>
        <div className="image-wrapper">
          {image && <GatsbyImage image={image} alt={litter.name} />}
        </div>
        <h3 className={styles.litterName}>{litter.name}</h3>
      </Link>
    </li>
  )
}

export default LitterCard
