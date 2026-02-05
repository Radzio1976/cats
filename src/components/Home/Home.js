import * as React from "react"
import CatCard from "../CatCard/CatCard"
import LitterCard from "../LitterCard/LitterCard"
import * as styles from "./Home.module.css"

const Home = ({ data }) => {
  const { oldMaleCats, oldFemaleCats, litters } = data

  return (
    <div className={styles.homeGrid}>
      <section>
        <ul>
          {oldMaleCats.map(cat => (
            <CatCard key={cat.id} cat={cat} urlBase="/dojrzale-koty" />
          ))}
        </ul>
      </section>

      <section>
        <ul>
          {litters.map(litter => (
            <>
              {<LitterCard key={litter.id} litter={litter} urlBase="/mioty" />}
            </>
          ))}
        </ul>
      </section>

      <section>
        <ul>
          {oldFemaleCats.map(cat => (
            <CatCard key={cat.id} cat={cat} urlBase="/dojrzale-koty" />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home
