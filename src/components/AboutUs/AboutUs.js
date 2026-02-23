import React, { useState, useRef } from "react"
import * as styles from "./AboutUs.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Modal from "../Modal/Modal"

const AboutUs = () => {
  const { t } = useTranslation()
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
        <h1 data-i18n="aboutUs:about_us.h1">{t("about_us.h1")}</h1>
        <p data-i18n="aboutUs:aboutUs:about_us.p1">{t("about_us.p1")}</p>
        <p data-i18n="aboutUs:about_us.p2">{t("about_us.p2")}</p>
        <p data-i18n="aboutUs:about_us.p3">{t("about_us.p3")}</p>
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
