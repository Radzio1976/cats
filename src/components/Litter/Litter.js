import React from "react"
import Gallery from "../Gallery/Gallery"
import LitterParents from "./LitterParents"
import LitterChildren from "./LitterChildren"
import LitterPagination from "./LitterPagination"
import * as styles from "./Litter.module.css"

const Litter = ({ litterData, pageContext }) => {
  if (!litterData) return null
  const litterImages = litterData.images || []
  const kittenImages = litterData.children
    .map(child => child.images?.[0])
    .filter(Boolean)

  const galleryImages = [...litterImages, ...kittenImages]
  console.log(litterData)

  return (
    <section className={styles.litterSection}>
      {/* <Gallery images={galleryImages} className={styles.litterGallery} /> */}

      <LitterParents parents={litterData.parents} />
      {/* <h1 className={styles.title}>{litterData.name}</h1> */}

      <LitterChildren
        litterSlug={litterData.slug}
        children={litterData.children}
      />
      <LitterPagination pageContext={pageContext} />
    </section>
  )
}

export default Litter
