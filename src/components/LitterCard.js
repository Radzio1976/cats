import * as React from "react"
import { Link } from "gatsby"

const LitterCard = ({ litter, urlBase }) => {
  return (
    <li className="litter-card">
      <Link to={`${urlBase}/${litter.slug}`}>
        <div className="image-wrapper">
          <img
            src={litter.images?.[0]?.url || "/placeholder.jpg"}
            alt={litter.name}
          />
        </div>
        <h3>{litter.name}</h3>
      </Link>
    </li>
  )
}

export default LitterCard
