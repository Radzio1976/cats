import React from "react"
import * as styles from "./OldCats.module.css"
import CatCard from "../CatCard/CatCard"

const OldCats = ({ oldCats }) => {
  console.log(oldCats)
  return (
    <div className={styles.oldCatsSection}>
      <div className={styles.oldMaleCatsSection}>
        <ul>
          {oldCats.map(cat => {
            return cat.sex === "male" ? (
              <CatCard
                key={cat.id}
                cat={cat}
                urlBase="/dojrzale-koty"
                className={styles.oldCatsCatCard}
              />
            ) : (
              ""
            )
          })}
        </ul>
      </div>
      <div className={styles.oldFemaleCatsSection}>
        <ul>
          {oldCats.map(cat => {
            return cat.sex === "female" ? (
              <CatCard
                key={cat.id}
                cat={cat}
                urlBase="/dojrzale-koty"
                className={styles.oldCatsCatCard}
              />
            ) : (
              ""
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default OldCats
