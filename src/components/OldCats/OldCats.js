import React from "react"
import { Link } from "gatsby"
import * as styles from "./OldCats.module.css"
import CatCard from "../CatCard"

const OldCats = ({ oldCats }) => {
  console.log(oldCats)
  return (
    <div className={styles.oldCatsSection}>
      <div className={styles.oldMaleCatsSection}>
        <ul>
          {oldCats.map(cat => {
            return cat.sex === "male" ? (
              <CatCard key={cat.id} cat={cat} urlBase="/dojrzale-koty" />
            ) : (
              ""
            )
          })}
        </ul>
      </div>
      <div className={styles.oldFemaleCatsSection}>
        <ul>
          {oldCats.map(cat => {
            return cat.sex === "female" ? (
              <CatCard key={cat.id} cat={cat} urlBase="/dojrzale-koty" />
            ) : (
              ""
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default OldCats

// <ul
//   style={{
//     padding: "0 15px",
//   }}
// >
//   {oldCats.map(cat => (
//     <Link to={`/dojrzale-koty/${cat.slug}`} key={cat.id}>
//       <li
//         className="old-cat-card"
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           textAlign: "center",
//           border: "1px solid black",
//           borderRadius: "12px",
//         }}
//       >
//         <div className="old-cat-image-wrapper">
//           <img
//             src={cat.images?.[0]?.url || "/placeholder.jpg"}
//             alt={cat.name}
//             style={{
//               width: "200px",
//               height: "200px",
//               objectFit: "cover",
//               objectPosition: "center",
//               borderRadius: "12px",
//             }}
//           ></img>
//         </div>
//         <h1>{cat.name}</h1>
//       </li>
//     </Link>
//   ))}
// </ul>
