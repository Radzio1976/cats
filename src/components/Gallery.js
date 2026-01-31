import React from "react"
import * as styles from "./Cat/Cat.module.css"

const Gallery = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map(image => (
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

export default Gallery
