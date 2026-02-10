import React from "react"
import { Link } from "gatsby"
import * as styles from "./Cat.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CatParents = ({ parents }) => {
  const father = parents.find(p => p.sex === "male")
  const mother = parents.find(p => p.sex === "female")

  return (
    <div className={styles.parents}>
      {[father, mother].map(parent => {
        const image = getImage(parent?.images?.[0]?.localFile)
        return (
          <Link to={`/dojrzale-koty/${parent?.slug}`}>
            <div key={parent?.id} className={styles.parentCard}>
              {image && (
                <GatsbyImage image={image} alt={parent?.images[0].fileName} />
              )}
              <h2>
                {parent?.sex === "male" ? "Ojciec" : "Matka"}: {parent?.name}
              </h2>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default CatParents
