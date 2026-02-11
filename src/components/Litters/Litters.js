import * as React from "react"
import * as styles from "./Litters.module.css"
import LitterCard from "../LitterCard/LitterCard"

const Litters = ({ litters }) => {
  return (
    <div className={styles.litters}>
      <section className={styles.littersSection}>
        <ul>
          {litters.map(litter => (
            <>
              {
                <LitterCard
                  key={litter.id}
                  litter={litter}
                  urlBase="/mioty"
                  className={styles.littersLitterCard}
                />
              }
            </>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Litters
