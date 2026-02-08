import React from "react"
import { Link } from "gatsby"
import * as styles from "./Litter.module.css"

const LitterChildren = ({ children, litterSlug }) => {
  return (
    <div className={styles.children}>
      {children.map(child => (
        <Link
          to={`/mioty/${litterSlug}/${child.slug}`}
          className={styles.link}
          key={child.id}
        >
          <div className={styles.childCard}>
            <img src={child.images[0].url} alt={child.images[0].fileName} />
            <div>
              <h2>{child.name}</h2>
              <p>{child.desc.markdown}</p>
              Więcej
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default LitterChildren
