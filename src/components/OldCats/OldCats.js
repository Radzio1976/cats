import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./OldCats.module.css"
import CatCard from "../CatCard/CatCard"

const OldCats = ({ oldCats, location }) => {
  const { t } = useTranslation()
  const pathname = location.pathname
  console.log(pathname)

  return (
    <section className={styles.oldCatsSection}>
      {pathname.includes(t("paths.male_cats")) ? (
        <div className={styles.oldMaleCatsSection}>
          <ul>
            {oldCats.map(cat => {
              return cat.sex === "male" ? (
                <CatCard
                  data-i18n="routes:paths.male_cats"
                  key={cat.id}
                  cat={cat}
                  urlBase={t("paths.male_cats")}
                  className={styles.oldCatsCatCard}
                  variant="oldCats"
                />
              ) : (
                ""
              )
            })}
          </ul>
        </div>
      ) : (
        <div className={styles.oldFemaleCatsSection}>
          <ul>
            {oldCats.map(cat => {
              return cat.sex === "female" ? (
                <CatCard
                  data-i18n="routes:paths.female_cats"
                  key={cat.id}
                  cat={cat}
                  urlBase={t("paths.female_cats")}
                  className={styles.oldCatsCatCard}
                  variant="oldCats"
                />
              ) : (
                ""
              )
            })}
          </ul>
        </div>
      )}
    </section>
  )
}

export default OldCats
