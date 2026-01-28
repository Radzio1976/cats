import React from "react"
import * as styles from "./Cat.module.css"
import CatGallery from "./CatGallery"
import CatParents from "./CatParents"
import CatDescription from "./CatDescription"

const Cat = ({ catData }) => {
  const cat = catData.oldCat || catData.youngCat

  if (!cat) {
    return <p>Nie znaleziono kota</p>
  }

  return (
    <section className={styles.section}>
      <CatGallery cat={cat} />

      <h1 className={styles.title}>{cat.name}</h1>

      {cat.parents && <CatParents parents={cat.parents} />}

      <CatDescription cat={cat} />
    </section>
  )
}

export default Cat
