import React, { useState, useRef } from "react"
import * as styles from "./AboutUs.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import Modal from "../Modal/Modal"

const AboutUs = () => {
  const [imageCount, setImageCount] = useState(null)
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "breeding" } }) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(width: 1200)
          }
        }
      }
    }
  `)
  const images = data.allFile.nodes
  const modalImage = getImage(
    images?.[imageCount]?.childImageSharp?.gatsbyImageData
  )

  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.aboutUsText}>
        <p>
          W naszej hodowli nie licząc bardzo dużej części wspólnej naszego domu
          gdzie koty mają swobodny dostęp i żyją z nami jak rodzina, stado ma do
          swojej dyspozycji dwa dedykowane pomieszczenia oraz obszerną wolierę.{" "}
        </p>
        <p>
          Pierwsze pomieszczenie, można rzec główna sypialnia oraz bawialnia
          usytuowana jest na głównym poziomie domu. Wejście do niej stanowią
          wielkie szklane drzwi aby koty mogły cały czas obserwować domowników,
          nawet gdy sielsko spędzają czas na wielu legowiskach i drapakach
          znajdujących się w środku. Z pomieszczenia prowadzi wyjście na
          obszerną wolierę, umieszczoną nad brzegiem uroczej rzeki gdzie kociaki
          uwielbiają przesiadywać obserwując kaczki i gołębie.{" "}
        </p>
        <p>
          Drugie pomieszczenie mieści się na poddaszu. Jest to bardziej spokojne
          i kameralne miejsce w którym najczęściej mieszka kotka opiekująca się
          jeszcze bardzo młodymi i delikatnymi kotkami. Tutaj również kociaki
          mają do dyspozycji wyjście na małą wolierę oraz zapewniony pełen
          komfort w postaci legowisk i drapaków. Do tego pomieszczenia również
          prowadzą szklane drzwi co bardzo sprzyja socjalizacji młodych pokoleń
        </p>
      </div>
      <div className={styles.aboutUsGallery}>
        <div
          className={styles.aboutUsGalleryImage1}
          onClick={() => setImageCount(0)}
        >
          <StaticImage
            src="../../images/breeding/breeding_1.jpg"
            alt=""
            placeholder="blurred"
            className="rounded-lg"
          />
        </div>
        <div
          className={styles.aboutUsGalleryImage2}
          onClick={() => setImageCount(1)}
        >
          <StaticImage
            src="../../images/breeding/breeding_2.jpg"
            alt=""
            placeholder="blurred"
            className="rounded-lg"
          />
        </div>
        <div
          className={styles.aboutUsGalleryImage3}
          onClick={() => setImageCount(2)}
        >
          <StaticImage
            src="../../images/breeding/breeding_3.jpg"
            alt=""
            placeholder="blurred"
            className="rounded-lg"
          />
        </div>
        <div
          className={styles.aboutUsGalleryImage4}
          onClick={() => setImageCount(3)}
        >
          <StaticImage
            src="../../images/breeding/breeding_4.jpg"
            alt=""
            placeholder="blurred"
            className="rounded-lg"
          />
        </div>
        <div
          className={styles.aboutUsGalleryImage5}
          onClick={() => setImageCount(4)}
        >
          <StaticImage
            src="../../images/breeding/breeding_5.jpg"
            alt=""
            placeholder="blurred"
            className="rounded-lg"
          />
        </div>
        <div
          className={styles.aboutUsGalleryImage6}
          onClick={() => setImageCount(5)}
        >
          <StaticImage
            src="../../images/breeding/breeding_6.jpg"
            alt=""
            placeholder="blurred"
            className="rounded-lg"
          />
        </div>
        <Modal
          images={images}
          modalImage={modalImage}
          imageCount={imageCount}
          setImageCount={setImageCount}
        />
      </div>
    </section>
  )
}

export default AboutUs

// {data.allFile.nodes.map((file, i) => (
//   <div className={styles[`aboutUsGalleryImage${i + 1}`]}>
//     <GatsbyImage
//       key={file.id}
//       image={getImage(file)}
//       alt=""
//       placeholder="blurred"
//       className="rounded-lg"
//     />
//   </div>
// ))}
