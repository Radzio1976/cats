import * as React from "react"
import { useLocation } from "@reach/router"
import { useTranslation } from "gatsby-plugin-react-i18next"
import CatCard from "../CatCard/CatCard"
import * as styles from "./AvailableKittens.module.css"

const AvailableKittens = ({
  data,
  catData,
  litterData,
  children,
  pageContext,
}) => {
  const { t } = useTranslation()
  const faqItems = t("faq.answers_and_questions", { returnObjects: true })
  console.log(data)

  return (
    <section className={styles.availableKittensSection}>
      <h1 data-i18n="faq:faq.h1">{t("faq.h1")}</h1>
      <div>
        {faqItems.map(item => {
          return (
            <div>
              <h1>{item.question}</h1>
              <p>{item.answer}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AvailableKittens
