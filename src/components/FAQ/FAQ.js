import React, { useState } from "react"
import { useLocation } from "@reach/router"
import { useTranslation } from "gatsby-plugin-react-i18next"
import CatCard from "../CatCard/CatCard"
import * as styles from "./FAQ.module.css"

const FAQ = () => {
  const { t } = useTranslation()
  const faqItems = t("faq.answers_and_questions", { returnObjects: true })
  console.log(faqItems)
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className={styles.faqSection}>
      <h1 data-i18n="faq:faq.h1">{t("faq.h1")}</h1>
      {faqItems.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <button className={styles.faqQuestion} onClick={() => toggle(index)}>
            {item.question}
          </button>

          {activeIndex === index && (
            <div className={styles.faqAnswer}>{item.answer}</div>
          )}
        </div>
      ))}
    </section>
  )
}

export default FAQ
