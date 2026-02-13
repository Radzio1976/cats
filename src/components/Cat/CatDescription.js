import React from "react"
import * as styles from "./Cat.module.css"

const CatDescription = ({ cat, catData }) => {
  return (
    <div className={styles.data}>
      <section>
        <h3 className={styles.title}>{cat.name}</h3>
        <p>Data urodzenia: {cat.birthDate}</p>
        <p>Umaszczenie: {cat.color}</p>
        <p>
          Rodowód:{" "}
          <a href={cat.lineage} target="_blank">
            LINK
          </a>
        </p>
      </section>
      {catData.oldCat && (
        <section>
          <h3 className={styles.title}>Badania</h3>
          <ul>
            <li>
              <a href={cat.hcmTest.url} target="_blank">
                Badanie HCM
              </a>
            </li>
            <li>
              <a href={cat.pkdTest.url} target="_blank">
                Badanie PKD
              </a>
            </li>
            <li>
              <a href={cat.xyzTest.url} target="_blank">
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
