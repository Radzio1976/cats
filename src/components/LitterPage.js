import React from "react"
import { Link } from "gatsby"

const LitterPage = ({ litterData }) => {
  console.log(litterData)
  const catFather = litterData.parents.filter(
    parent => parent.sex === "male"
  )[0]
  const catMother = litterData.parents.filter(
    parent => parent.sex === "female"
  )[0]
  const litterImages = litterData.images.map(image => image)
  const litterYoungCatsFirstImages = litterData.children.map(
    image => image.images[0]
  )
  const litterGalleryImages = litterImages.concat(litterYoungCatsFirstImages)

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
        alt={image.fileName}
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
        {litterGalleryImages.map(image => LitterImg(image.url))}
      </div>
      <div className="litter-card-litter-name-section">
        <h1>{litterData.litterName}</h1>
      </div>
      <div
        className="litter-card-litter-parents"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="litter-card-litter-father">
          <div className="litter-father-image-wrapper">
            <img
              src={catFather.images[0].url}
              alt={catFather.images[0].fileName}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "12px",
                marginBottom: "0px",
              }}
            ></img>
            <h2>Ojciec: {catFather.name}</h2>
          </div>
        </div>
        <div className="litter-card-litter-mother">
          <img
            src={catMother.images[0].url}
            alt={catMother.images[0].fileName}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "12px",
              marginBottom: "0px",
            }}
          ></img>
          <h2>Matka: {catMother.name}</h2>
        </div>
      </div>
      <div className="litter-card-childs-list">
        {litterData.children.map(child => (
          <div
            className="litter-child-card"
            style={{
              display: "flex",
              justifyContent: "left",
              margin: "0 auto",
              width: "60%",
            }}
          >
            <div className="litter-child-image-wrapper">
              <img
                src={child.images[0].url}
                alt={child.images[0].fileName}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "12px",
                  marginBottom: "0px",
                }}
              ></img>
            </div>
            <div
              className="litter-child-name-and-desc"
              style={{ paddingLeft: "30px" }}
            >
              <h2>{child.name}</h2>
              <p>{child.desc.markdown}</p>
              <button>
                <Link
                  to={`/mioty/${litterData.slug}${
                    child.sex === "male" ? "/mlode-kocury/" : "/mlode-kotki/"
                  }${child.slug}`}
                >
                  Więcej
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LitterPage
