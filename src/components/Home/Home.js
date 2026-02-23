import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import CatCard from "../CatCard/CatCard"
import LitterCard from "../LitterCard/LitterCard"
import * as styles from "./Home.module.css"

const Home = () => {
  const { t } = useTranslation()

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
      <p>
        Mauris pharetra nisl id porta accumsan. Maecenas quis tortor at eros
        condimentum cursus. Vivamus imperdiet purus nulla, faucibus ultricies
        dui faucibus quis. Mauris ac ex vitae purus elementum pharetra a non
        libero. Maecenas nec ex quam. Nunc quis sapien sed turpis tempor luctus.
        Aliquam feugiat eu nulla at pellentesque. Nullam convallis sem eget
        pretium porttitor. Vivamus urna mauris, vehicula id purus id, convallis
        sagittis mauris. Integer posuere faucibus molestie.
      </p>
      <p>
        Praesent ullamcorper ultricies risus sed tincidunt. Nulla ut nibh eu
        felis fermentum eleifend. Sed tortor tortor, rutrum in dui eu,
        sollicitudin iaculis sem. Pellentesque mattis diam tempor tempus varius.
        Nam eget justo pellentesque, ultricies tortor at, egestas mauris. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a tellus
        pretium quam convallis porttitor. Aenean nec fermentum metus. Donec
        auctor facilisis nunc, et gravida eros euismod quis. Duis facilisis, est
        nec dapibus volutpat, odio nibh vulputate mauris, dignissim malesuada
        dolor mi quis ex. Fusce nec euismod diam, at sollicitudin sapien.{" "}
      </p>
      <p>
        Sed massa arcu, venenatis ut accumsan semper, venenatis et metus. In non
        semper tortor. Ut dignissim ipsum at tortor mattis, id ultrices turpis
        volutpat. Aliquam non sem in mauris venenatis mattis feugiat id nunc.
        Integer a urna nec ipsum ullamcorper pulvinar. Aenean eget dui finibus,
        iaculis velit scelerisque, molestie velit. Phasellus gravida odio
        mauris, eu ornare purus dictum non. In condimentum nibh vel rutrum
        mattis. Pellentesque a eros vitae felis ultricies condimentum nec ut
        massa. Fusce elementum mauris eu ultricies vestibulum. Suspendisse ut
        magna non quam scelerisque molestie. Vivamus justo turpis, accumsan sed
        varius quis, fringilla in tortor. Aliquam consequat ac ipsum in
        eleifend. Nullam aliquam nunc ligula, quis egestas massa tempus sed.
        Pellentesque eget mi et mi facilisis tristique.
      </p>
    </section>
  )
}

export default Home
