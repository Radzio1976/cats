import React from "react"
import * as styles from "./Gallery.module.css"

const Gallery = ({ images, className = "" }) => {
  console.log(className)
  return (
    <div className={`${styles.gallery} ${className}`}>
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
