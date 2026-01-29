import React from "react"
import { Link } from "gatsby"
import * as styles from "./Litter.module.css"

const LitterParents = ({ parents }) => {
  console.log(parents)
  const father = parents.find(p => p.sex === "male")
  const mother = parents.find(p => p.sex === "female")

  return (
    <div className={styles.parents}>
      {[father, mother].map(parent => (
        <Link to={`/dojrzale-koty/${parent?.slug}`}>
          <div key={parent?.id} className={styles.parentCard}>
            <img src={parent?.images[0].url} alt={parent?.images[0].fileName} />
            <h2>
              {parent?.sex === "male" ? "Ojciec" : "Matka"}: {parent?.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default LitterParents
