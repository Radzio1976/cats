import React from "react"
import { Link } from "gatsby"
import * as styles from "./Litter.module.css"

const LitterChildren = ({ children, litterSlug }) => {
  return (
    <div className={styles.children}>
      {children.map(child => (
        <div key={child.id} className={styles.childCard}>
          <img src={child.images[0].url} alt={child.images[0].fileName} />
          <div>
            <h2>{child.name}</h2>
            <p>{child.desc.markdown}</p>
            <Link
              to={`/mioty/${litterSlug}${
                child.sex === "male" ? "/mlode-kocury/" : "/mlode-kotki/"
              }${child.slug}`}
              className={styles.link}
            >
              Więcej
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LitterChildren
