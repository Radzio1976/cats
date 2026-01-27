import React from "react"
import LitterGallery from "./LitterGallery"
import LitterParents from "./LitterParents"
import LitterChildren from "./LitterChildren"
import * as styles from "./Litter.module.css"

const Litter = ({ litterData }) => {
  if (!litterData) return null

  return (
    <section className={styles.section}>
      <LitterGallery litter={litterData} />

      <h1 className={styles.title}>{litterData.name}</h1>

      <LitterParents parents={litterData.parents} />

      <LitterChildren
        litterSlug={litterData.slug}
        children={litterData.children}
      />
    </section>
  )
}

export default Litter
