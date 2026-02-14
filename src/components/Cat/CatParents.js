import React from "react"
import { Link } from "gatsby"
import * as styles from "./Cat.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CatParents = ({ parents }) => {
  const father = parents.find(p => p.sex === "male")
  const mother = parents.find(p => p.sex === "female")

  return (
    <div className={styles.parents}>
      <h3>
        Rodzice: <Link to={`/kocury/${father?.slug}`}>{father?.name}</Link>
        <Link to={`/kotki/${mother?.slug}`}>{mother?.name}</Link>
      </h3>
    </div>
  )
}

export default CatParents
