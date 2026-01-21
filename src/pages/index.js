import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getimage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const oldCats = data?.highgraph?.oldCats || []
  const oldMaleCats = oldCats.filter(cat => cat.sex === "male")
  const oldFemaleCats = oldCats.filter(cat => cat.sex === "female")
  const litters = data?.highgraph?.litters || []
  console.log("DANE ", oldCats)

  return (
    <Layout>
      <div
        className="main-cats-and-litters-section"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          className="male-cats-section"
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
            {oldMaleCats.map(cat => (
              <Link to={`/kocury/${cat.slug}`}>
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
            {litters.map(litter => (
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
            {oldFemaleCats.map(cat => (
              <Link to={`/kotki/${cat.slug}`}>
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
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    highgraph {
      oldCats {
        id
        name
        slug
        sex
        desc {
          markdown
        }
        images {
          url
          width
          height
        }
      }
      litters {
        id
        litterName
        desc {
          markdown
        }
        images {
          url
          width
          height
        }
        slug
      }
    }
  }
`

export default IndexPage
