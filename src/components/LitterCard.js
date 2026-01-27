import * as React from "react"
import { Link } from "gatsby"

const LitterCard = ({ litter, urlBase }) => {
  return (
    <li className="litter-card">
      <Link to={`/mioty/${litter.slug}`}>
        <div className="image-wrapper">
          <img
            src={litter.images?.[0]?.url || "/placeholder.jpg"}
            alt={litter.name}
          />
        </div>
      </Link>
    </li>
  )
}

export default LitterCard
