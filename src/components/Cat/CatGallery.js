import React from "react"
import * as styles from "./Cat.module.css"

const CatGallery = ({ cat }) => {
  const galleryImages = cat.images

  return (
    <div className={styles.gallery}>
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

export default CatGallery
