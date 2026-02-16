import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const ContactPage = ({ data }) => {
  const oldCats = data?.highgraph?.oldCats || []
  const oldMaleCats = oldCats.filter(cat => cat.sex === "male")
  const oldFemaleCats = oldCats.filter(cat => cat.sex === "female")

  return (
    <Layout data={{ oldMaleCats, oldFemaleCats }}>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 flex items-center">
        <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
          <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
            <div className="w-full lg:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                src="https://www.tailwindtap.com/assets/components/gallery/image1.jpg"
              />
            </div>
            <div className="w-full lg:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                src="https://www.tailwindtap.com/assets/components/gallery/image2.jpg"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
                src="https://www.tailwindtap.com/assets/components/gallery/image7.jpg"
              />
            </div>
          </div>
          <div className="flex w-full sm:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                src="https://www.tailwindtap.com/assets/components/gallery/image9.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                src="https://www.tailwindtap.com/assets/components/gallery/image4.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                src="https://www.tailwindtap.com/assets/components/gallery/image6.jpg"
              />
            </div>
          </div>
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
export const Head = () => <Seo title="Kontakt" />

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
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1200
                quality: 70
                placeholder: BLURRED
                formats: [WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`

export default ContactPage
