import React from "react"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./Litter.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LitterChildren = ({ children, litterSlug }) => {
  const { t } = useTranslation()
  const { language } = useI18next()

  return (
    <div className={styles.children}>
      {children.map(child => {
        const image = getImage(child.images?.[0]?.localFile)
        return (
          <Link
            to={t("paths.youngCatSingle", { litterSlug, catSlug: child.slug })}
            className={styles.link}
            key={child.id}
            data-i18n="routes:paths.youngCatSingle"
          >
            <div className={styles.childCard}>
              {image && (
                <GatsbyImage
                  image={image}
                  alt={child.images[0].fileName}
                  className={styles.childImage}
                  imgClassName={styles.childImg}
                />
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
                    data-i18n="common:availability.available"
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
                      ? t("availability.available")
                      : child.availability === "unavailable"
                      ? t("availability.unavailable")
                      : t("availability.reserved")
                  }`}</p>
                </div>
                <p data-i18n="common:buttons.more">{t("buttons.more")}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default LitterChildren
