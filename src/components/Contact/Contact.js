import * as React from "react"
import * as styles from "./Contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div
        className={styles.contactMapRow}
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80548.83270109381!2d15.61804124428662!3d50.88391516088902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f21b371596f79%3A0xa64a2e6e63a46550!2s58-500%20Jelenia%20G%C3%B3ra!5e0!3m2!1spl!2spl!4v1771512305793!5m2!1spl!2spl"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "80%",
            border: 0,
          }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
      <div className={styles.contactDataRow}></div>
    </section>
  )
}

export default Contact
