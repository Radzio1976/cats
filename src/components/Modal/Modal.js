import React, { useState } from "react"
import * as styles from "./Modal.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const Modal = ({ images, modalImage, imageCount, setImageCount }) => {
  return (
    <>
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
              style={{ maxHeight: "90vh" }}
              imgStyle={{ objectFit: "contain" }}
            />
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
    </>
  )
}

export default Modal
