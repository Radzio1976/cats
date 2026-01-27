import React from "react"
import * as styles from "./Cat.module.css"

const CatDescription = ({ cat }) => {
  return (
    <div className={styles.data}>
      <h2>Data urodzenia: {cat.birthDate}</h2>
      <p>Opis: {cat.desc.markdown}</p>
    </div>
  )
}

export default CatDescription
