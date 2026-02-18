import React from "react"
import { Link } from "gatsby"
import * as styles from "./Litter.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LitterChildren = ({ children, litterSlug }) => {
  return (
    <div className={styles.children}>
      {children.map(child => {
        const image = getImage(child.images?.[0]?.localFile)
        return (
          <Link
            to={`/mioty/${litterSlug}/${child.slug}`}
            className={styles.link}
            key={child.id}
          >
            <div className={styles.childCard}>
              {image && (
                <GatsbyImage image={image} alt={child.images[0].fileName} />
              )}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                  }}
                >
                  <h2>{child.name}</h2>
                  <p
                    className={styles.availability}
                    style={{
                      color: "black",
                      backgroundColor:
                        child.availability === "available"
                          ? "yellowgreen"
                          : child.availability === "unavailable"
                          ? "red"
                          : "yellow",
                      marginLeft: "20px",
                    }}
                  >{`${
                    child.availability === "available"
                      ? "Dostępny"
                      : child.availability === "unavailable"
                      ? "Niedostępny"
                      : "Zarezerwowany"
                  }`}</p>
                </div>
                <p>Więcej</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default LitterChildren
