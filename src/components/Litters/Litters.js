import * as React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import * as styles from "./Litters.module.css"
import LitterCard from "../LitterCard/LitterCard"

const Litters = ({ litters }) => {
  const { language } = useI18next()
  console.log(language)
  return (
    <section className={styles.littersSection}>
      <ul>
        {litters.map(litter => (
          <>
            {
              <LitterCard
                key={litter.id}
                litter={litter}
                urlBase={`/${
                  language === "pl"
                    ? "mioty"
                    : language === "en"
                    ? "litters"
                    : "wuerfe"
                }`}
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
