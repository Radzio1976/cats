import React from "react"
import { Link } from "gatsby"
import * as styles from "./Litter.module.css"

const LitterPagination = ({ pageContext }) => {
  const { prevSlug, nextSlug } = pageContext

  return (
    <div className={styles.pagination}>
      {/* POPRZEDNI */}
      <div className={styles.prev}>
        {prevSlug ? (
          <Link to={`/mioty/${prevSlug}`}>
            <button>← Poprzedni</button>
          </Link>
        ) : (
          <button disabled style={{ opacity: 0.5, cursor: "default" }}>
            ← Poprzedni
          </button>
        )}
      </div>

      {/* NASTĘPNY */}
      <div className={styles.next}>
        {nextSlug ? (
          <Link to={`/mioty/${nextSlug}`}>
            <button>Następny →</button>
          </Link>
        ) : (
          <button disabled style={{ opacity: 0.5, cursor: "default" }}>
            Następny →
          </button>
        )}
      </div>
    </div>
  )
}

export default LitterPagination
