import React from "react"
import { Link } from "gatsby"

const OldCats = ({ oldCats }) => {
  return (
    <div
      className="old-cats-section"
      style={{
        width: "25%",
      }}
    >
      <ul
        style={{
          padding: "0 15px",
        }}
      >
        {oldCats.map(cat => (
          <Link
            to={`/dojrzale-koty/${cat.sex === "male" ? "kocury" : "kotki"}/${
              cat.slug
            }`}
            key={cat.id}
          >
            <li
              className="old-cat-card"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                border: "1px solid black",
                borderRadius: "12px",
              }}
            >
              <div className="old-cat-image-wrapper">
                <img
                  src={cat.images?.[0]?.url || "/placeholder.jpg"}
                  alt={cat.name}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "12px",
                  }}
                ></img>
              </div>
              <h1>{cat.name}</h1>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default OldCats
