import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import * as styles from "./Cat.module.css"

const CatDescription = ({ cat, catData }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.data}>
      <section>
        <h3 className={styles.title}>{cat.name}</h3>
        <p data-i18n="cat:cat.date_of_birth">
          {t("cat.date_of_birth")}: {cat.birthDate}
        </p>
        <p data-i18n="cat:cat.color">
          {t("cat.color")}: {cat.color}
        </p>
        <p data-i18n="cat:cat.lineage">
          {t("cat.lineage")}:{" "}
          <a href={cat.lineage} target="_blank">
            LINK
          </a>
        </p>
      </section>
      {catData.oldCat && (
        <section>
          <h3 className={styles.title} data-i18n="cat:cat.tests">
            {t("cat.tests")}
          </h3>
          <ul>
            <li>
              <a href={cat?.hcmTest?.url} target="_blank">
                Badanie HCM
              </a>
            </li>
            <li>
              <a href={cat?.pkdTest?.url} target="_blank">
                Badanie PKD
              </a>
            </li>
            <li>
              <a href={cat?.xyzTest?.url} target="_blank">
                Badanie XYZ
              </a>
            </li>
          </ul>
        </section>
      )}
    </div>
  )
}

export default CatDescription
