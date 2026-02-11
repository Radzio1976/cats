import React from "react"
import * as styles from "./OldCats.module.css"
import CatCard from "../CatCard/CatCard"

const OldCats = ({ oldCats, location }) => {
  const pathname = location.pathname
  console.log(location)
  return (
    <div className={styles.oldCatsGrid}>
      {pathname === "/kocury/" ? (
        <div className={styles.oldMaleCatsSection}>
          <ul>
            {oldCats.map(cat => {
              return cat.sex === "male" ? (
                <CatCard
                  key={cat.id}
                  cat={cat}
                  urlBase="/kocury"
                  className={styles.oldCatsCatCard}
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
                  urlBase="/kotki"
                  className={styles.oldCatsCatCard}
                />
              ) : (
                ""
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default OldCats
