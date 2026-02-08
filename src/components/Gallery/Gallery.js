import React, { useState, useRef } from "react"
import useClickOutside from "../../hooks/useClickOutside"
import * as styles from "./Gallery.module.css"

const Gallery = ({ images, className = "" }) => {
  const ref = useRef(null)
  const [imageCount, setImageCount] = useState(null)
  console.log(images)

  useClickOutside(ref, () => {
    setImageCount(null)
  })

  return (
    <div className={`${styles.gallery} ${className}`}>
      {images.map((image, i) => (
        <img
          key={image.id}
          src={image.url}
          alt={image.fileName}
          className={styles.galleryImage}
          onClick={() => setImageCount(i)}
        />
      ))}

      {imageCount !== null && (
        <div ref={ref}>
          <div className={styles.modal}>
            <span onClick={() => setImageCount(null)} className={styles.close}>
              &times;
            </span>
            <img
              className={styles.modalContent}
              src={images[imageCount].url}
              alt={images[imageCount].fileName}
            />
            <div className={styles.caption}>{images[imageCount].title}</div>
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
