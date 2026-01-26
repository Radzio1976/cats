import * as React from "react"
import CatCard from "./CatCard"
import LitterCard from "./LitterCard"
import * as styles from "./Home.module.css"

const Home = ({ data }) => {
  const { oldMaleCats, oldFemaleCats, litters } = data

  return (
    <div className={styles.homeGrid}>
      <section>
        <ul>
          {oldMaleCats.map(cat => (
            <CatCard key={cat.id} cat={cat} urlBase="/dojrzale-koty/kocury" />
          ))}
        </ul>
      </section>

      <section>
        <ul>
          {litters.map(litter => (
            <li key={litter.id}>
              {<LitterCard key={litter.id} litter={litter} urlBase="/mioty" />}
              <h3>{litter.litterName}</h3>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <ul>
          {oldFemaleCats.map(cat => (
            <CatCard key={cat.id} cat={cat} urlBase="/dojrzale-koty/kotki" />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home
