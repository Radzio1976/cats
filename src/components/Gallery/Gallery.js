import React, { useState, useRef } from "react"
import useClickOutside from "../../hooks/useClickOutside"
import * as styles from "./Gallery.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Modal from "../Modal/Modal"

const Gallery = ({ images, variant }) => {
  const ref = useRef(null)
  const [imageCount, setImageCount] = useState(null)
  const modalImage = getImage(images?.[imageCount]?.localFile)

  useClickOutside(ref, () => {
    setImageCount(null)
  })

  return (
    <div
      className={[styles.gallery, variant === "cat" && styles.galleryCat]
        .filter(Boolean)
        .join(" ")}
    >
      {images.map((img, i) => {
        const image = getImage(img.localFile)
        return i < 7 ? (
          <div
            key={img.id}
            className={`${styles.galleryImage} ${
              i === 0 ? styles.bigImage : ""
            }`}
            onClick={() => setImageCount(i)}
          >
            <GatsbyImage image={image} alt="" />
          </div>
        ) : null
      })}
      <Modal
        images={images}
        modalImage={modalImage}
        imageCount={imageCount}
        setImageCount={setImageCount}
      />
    </div>
  )
}

export default Gallery
