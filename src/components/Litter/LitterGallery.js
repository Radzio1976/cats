import React from "react"
import * as styles from "./Litter.module.css"

const LitterGallery = ({ litter }) => {
  const litterImages = litter.images || []
  const kittenImages = litter.children
    .map(child => child.images?.[0])
    .filter(Boolean)

  const galleryImages = [...litterImages, ...kittenImages]

  return (
    <div className={styles.litterGallery}>
      {galleryImages.map(image => (
        <img
          key={image.id}
          src={image.url}
          alt={image.fileName}
          className={styles.galleryImage}
        />
      ))}
    </div>
  )
}

export default LitterGallery
