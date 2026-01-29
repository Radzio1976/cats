import * as React from "react"
import * as styles from "./Litters.module.css"
import LitterCard from "../LitterCard"

const Litters = ({ litters }) => {
  return (
    <div
      className={styles.litters}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <section>
        <ul>
          {litters.map(litter => (
            <li key={litter.id}>
              {<LitterCard key={litter.id} litter={litter} urlBase="/mioty" />}
              <h3>{litter.name}</h3>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Litters
