import React from "react"
import * as styles from "./Cat.module.css"
import Gallery from "../Gallery/Gallery"
import CatParents from "./CatParents"
import CatDescription from "./CatDescription"

const Cat = ({ catData }) => {
  console.log(catData)
  const cat = catData.oldCat || catData.youngCat

  if (!cat) {
    return <p>Nie znaleziono kota</p>
  }

  return (
    <section className={styles.catSection}>
      <Gallery images={cat.images} className={styles.catGallery} />

      {cat.parents && <CatParents parents={cat.parents} />}

      <CatDescription cat={cat} catData={catData} />
    </section>
  )
}

export default Cat
