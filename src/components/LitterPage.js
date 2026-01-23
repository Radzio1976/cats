import React from "react"
import { Link } from "gatsby"

const LitterPage = ({ litterData }) => {
  console.log(litterData)

  const LitterImg = image => (
    <div
      className="litter-card-images-gallery-wrapper"
      style={{
        padding: "10px",
      }}
      key={image.id}
    >
      <img
        src={image || "/placeholder.jpg"}
        alt={image.name}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "12px",
        }}
      ></img>
    </div>
  )

  return (
    <div className="litter-card-section">
      <div
        className="litter-card-images-gallery-section"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {litterData.images.map(image => LitterImg(image.url))}
        {litterData.child.map(image => LitterImg(image.images[0].url))}
      </div>
      <div className="litter-card-litter-name-section">
        <h1>{litterData.litterName}</h1>
      </div>
      <div className="litter-card-litter-parents">
        <div className="litter-card-litter-father"></div>
        <div className="litter-card-litter-mother"></div>
      </div>
      <div className="litter-card-childs-list"></div>
    </div>
  )
}

export default LitterPage
