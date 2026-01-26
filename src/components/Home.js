import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  console.log(data)
  return (
    <div
      className="main-cats-and-litters-section"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div
        className="male-cats-section"
        style={{
          width: "25%",
        }}
      >
        <ul
          style={{
            padding: "0 15px",
          }}
        >
          {data.oldMaleCats.map(cat => (
            <Link to={`/dojrzale-koty/kocury/${cat.slug}`}>
              <li
                className="old-male-cat-card"
                key={cat.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  border: "1px solid black",
                  borderRadius: "12px",
                }}
              >
                <div className="image-wrapper">
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
      <div
        className="litters-section"
        style={{
          width: "50%",
          // border: "1px solid black",
          // borderRadius: "12px",
        }}
      >
        <ul
          style={{
            padding: "0 15px",
          }}
        >
          {data.litters.map(litter => (
            <Link to={`/mioty/${litter.slug}`}>
              <li
                className="litter-card"
                key={litter.id}
                style={{
                  display: "flex",
                  textAlign: "center",
                  border: "1px solid black",
                  borderRadius: "12px",
                }}
              >
                <div className="image-wrapper">
                  <img
                    src={litter.images?.[0]?.url || "/placeholder.jpg"}
                    alt={litter.litterName}
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "12px",
                    }}
                  ></img>
                </div>
                <h1>{litter.litterName}</h1>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div
        className="female-cats-section"
        style={{
          width: "25%",
          // border: "1px solid black",
          // borderRadius: "12px",
        }}
      >
        <ul
          style={{
            padding: "0 15px",
          }}
        >
          {data.oldFemaleCats.map(cat => (
            <Link to={`/dojrzale-koty/kotki/${cat.slug}`}>
              <li
                className="old-male-cat-card"
                key={cat.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  border: "1px solid black",
                  borderRadius: "12px",
                }}
              >
                <div className="image-wrapper">
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
    </div>
  )
}

export default Home
