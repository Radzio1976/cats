import React from "react"
import { Link } from "gatsby"

const CatCard = ({ cat, urlBase }) => {
  return (
    <li className="cat-card">
      <Link to={`${urlBase}/${cat.slug}`}>
        <div className="image-wrapper">
          <img
            src={cat.images?.[0]?.url || "/placeholder.jpg"}
            alt={cat.name}
          />
        </div>
        <h3>{cat.name}</h3>
      </Link>
    </li>
  )
}

export default CatCard
