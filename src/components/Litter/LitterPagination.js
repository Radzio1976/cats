import React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./Litter.module.css"

const LitterPagination = ({ pageContext }) => {
  const { t } = useTranslation()
  const { prevSlug, nextSlug } = pageContext

  return (
    <div className={styles.pagination}>
      {/* POPRZEDNI */}
      <div className={styles.prev}>
        {prevSlug ? (
          <Link
            to={t("paths.litterSingle", { slug: prevSlug })}
            data-i18n-route="routes:paths.litterSingle"
          >
            <button data-i18n-label="common:buttons.prev">
              ← {t("buttons.prev")}
            </button>
          </Link>
        ) : (
          <button
            disabled
            style={{ opacity: 0.5, cursor: "default" }}
            data-i18n-label="common:buttons.prev"
          >
            ← {t("buttons.prev")}
          </button>
        )}
      </div>

      {/* NASTĘPNY */}
      <div className={styles.next}>
        {nextSlug ? (
          <Link
            to={t("paths.litterSingle", { slug: nextSlug })}
            data-i18n-route="routes:paths.litterSingle"
          >
            <button data-i18n-label="common:buttons.next">
              {t("buttons.next")} →
            </button>
          </Link>
        ) : (
          <button
            disabled
            style={{ opacity: 0.5, cursor: "default" }}
            data-i18n-label="common:buttons.next"
          >
            {t("buttons.next")} →
          </button>
        )}
      </div>
    </div>
  )
}

export default LitterPagination
