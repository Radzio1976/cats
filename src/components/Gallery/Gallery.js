import React, { useState, useRef } from "react"
import useClickOutside from "../../hooks/useClickOutside"
import * as styles from "./Gallery.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Gallery = ({ images, className = "" }) => {
  const ref = useRef(null)
  const [imageCount, setImageCount] = useState(null)
  const modalImage = getImage(images?.[imageCount]?.localFile)

  useClickOutside(ref, () => {
    setImageCount(null)
  })

  return (
    <div className={`${styles.gallery} ${className}`}>
      {images.map((img, i) => {
        const image = getImage(img.localFile)

        return (
          <div
            key={img.id}
            className={`${styles.galleryImage} ${
              i === 0 ? styles.bigImage : ""
            }`}
            onClick={() => setImageCount(i)}
          >
            <GatsbyImage image={image} alt="" />
          </div>
        )
      })}

      {imageCount !== null && (
        <div>
          <div className={styles.modal}>
            <span onClick={() => setImageCount(null)} className={styles.close}>
              &times;
            </span>
            <GatsbyImage
              className={styles.modalContent}
              image={modalImage}
              alt=""
            />
            <div className={styles.caption}>{images[imageCount].fileName}</div>
            <div>
              <button
                className={styles.prev}
                onClick={() =>
                  setImageCount(
                    imageCount === 0 ? images.length - 1 : imageCount - 1
                  )
                }
              >
                &#8592;
              </button>

              <button
                className={styles.next}
                onClick={() =>
                  setImageCount(
                    imageCount === images.length - 1 ? 0 : imageCount + 1
                  )
                }
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
