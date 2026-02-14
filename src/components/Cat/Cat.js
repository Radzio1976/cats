import React from "react"
import * as styles from "./Cat.module.css"
import Gallery from "../Gallery/Gallery"
import CatParents from "./CatParents"
import CatDescription from "./CatDescription"

const Cat = ({ catData }) => {
  const cat = catData.oldCat || catData.youngCat
  const parents = cat?.litter?.[0]?.parents

  return (
    <section className={styles.catSection}>
      <Gallery images={cat.images} className={styles.catGallery} />
      <CatDescription cat={cat} catData={catData} />
      {parents && <CatParents parents={parents} />}
    </section>
  )
}

export default Cat
