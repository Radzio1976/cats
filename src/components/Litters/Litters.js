import * as React from "react"
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./Litters.module.css"
import LitterCard from "../LitterCard/LitterCard"

const Litters = ({ litters }) => {
  const { t } = useTranslation()

  return (
    <section className={styles.littersSection}>
      <ul>
        {litters.map(litter => (
          <>
            {
              <LitterCard
                data-i18n="routes:paths.litters"
                key={litter.id}
                litter={litter}
                urlBase={t("paths.litters")}
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
