import React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import * as styles from "./OldCats.module.css"
import CatCard from "../CatCard/CatCard"

const OldCats = ({ oldCats, location }) => {
  const { language } = useI18next()
  const pathname = location.pathname
  console.log(pathname)
  console.log(oldCats)

  return (
    <section className={styles.oldCatsSection}>
      {pathname === "/pl/kocury/" ||
      pathname === "/en/male-cats/" ||
      pathname === "/de/kater/" ? (
        <div className={styles.oldMaleCatsSection}>
          <ul>
            {oldCats.map(cat => {
              return cat.sex === "male" ? (
                <CatCard
                  key={cat.id}
                  cat={cat}
                  urlBase={`/${
                    language === "pl"
                      ? "kocury"
                      : language === "en"
                      ? "male-cats"
                      : "kater"
                  }`}
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
                  key={cat.id}
                  cat={cat}
                  urlBase={`/${
                    language === "pl"
                      ? "kotki"
                      : language === "en"
                      ? "female-cats"
                      : "katzen"
                  }`}
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
