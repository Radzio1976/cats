import React from "react"
import { Link } from "gatsby"
import * as styles from "./Litter.module.css"

const LitterPagination = ({ pageContext }) => {
  const { prevSlug, nextSlug } = pageContext

  return (
    <nav className={styles.pagination}>
      <div className={styles.prev}>
        {prevSlug && <Link to={`/mioty/${prevSlug}`}>← Poprzedni</Link>}
      </div>
      <div className={styles.next}>
        {nextSlug && <Link to={`/mioty/${nextSlug}`}>Następny →</Link>}
      </div>
    </nav>
  )
}

export default LitterPagination
