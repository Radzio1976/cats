import * as React from "react"
import * as styles from "./Litters.module.css"
import LitterCard from "../LitterCard/LitterCard"

const Litters = ({ litters }) => {
  return (
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
  )
}

export default Litters
