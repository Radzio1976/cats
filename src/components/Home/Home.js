import * as React from "react"
import { useLocation } from "@reach/router"
import { useTranslation } from "gatsby-plugin-react-i18next"
import CatCard from "../CatCard/CatCard"
import LitterCard from "../LitterCard/LitterCard"
import * as styles from "./Home.module.css"

const Home = ({ data, catData, litterData, children, pageContext }) => {
  const { t } = useTranslation()
  const location = useLocation()
  const { oldMaleCats, oldFemaleCats } = data

  return (
    <section className={styles.homeSection}>
      <h1 data-i18n="home:home.h1">{t("home.h1")}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        sollicitudin porta aliquet. Maecenas nec purus vestibulum, commodo augue
        sed, bibendum eros. Quisque eget ante non ligula tristique fermentum.
        Suspendisse feugiat vel elit vel aliquam. Vestibulum sed condimentum
        turpis. Praesent a eros ligula. Vestibulum vel metus augue. Fusce
        iaculis interdum dignissim. Suspendisse dictum diam in lorem vestibulum
        efficitur. Aenean fringilla turpis velit, at auctor velit consectetur
        ut. Quisque pretium imperdiet diam quis porttitor. Duis accumsan mi
        vitae maximus interdum. Maecenas lacinia eu ipsum dapibus mollis. Duis
        aliquet turpis eu nisl volutpat sagittis. Nunc ultrices orci felis, id
        eleifend sapien mattis at. Duis lacinia viverra dui, at congue sem
        vestibulum vel. Phasellus nec odio mollis, molestie est vitae, malesuada
        leo.
      </p>
      <section className={styles.oldFemaleCatsRow}>
        <h1 data-i18n="home:home.h1">Kotki hodowlane</h1>
        <ul>
          {oldFemaleCats.map(cat => (
            <CatCard
              data-i18n="routes:paths.female_cats"
              key={cat.id}
              cat={cat}
              urlBase={t("paths.female_cats")}
              variant="home"
            />
          ))}
        </ul>
      </section>
      <section className={styles.oldMaleCatsRow}>
        <h1 data-i18n="home:home.h1">Kocury hodowlane</h1>
        <ul>
          {oldMaleCats.map(cat => (
            <CatCard
              data-i18n="routes:paths.male_cats"
              key={cat.id}
              cat={cat}
              urlBase={t("paths.male_cats")}
              variant="home"
            />
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Home
