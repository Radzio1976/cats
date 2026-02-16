import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./LitterCard.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LitterCard = ({ litter, urlBase, className }) => {
  const image = getImage(litter.images?.[0]?.localFile)
  const getRandomSize = (min, max) =>
    Math.round(Math.random() * (max - min) + min)
  console.log(litter.images)
  return (
    <li className={`${styles.litterCard} ${className}`}>
      <Link to={`/mioty/${litter.slug}`}>
        <div className="-m-1 flex flex-row h-[300px]">
          <div className="flex w-full flex-wrap">
            <div className="w-1/2 p-1 h-[45%] object-contain">
              <GatsbyImage
                className="block h-full w-full rounded-lg 2xl:rounded-2xl"
                image={getImage(litter.images?.[0]?.localFile)}
                alt={litter.name}
              />
            </div>
            <div className="w-1/2 p-1 h-[45%]">
              <GatsbyImage
                className="block h-full w-full rounded-lg 2xl:rounded-2xl"
                image={getImage(litter.images?.[1]?.localFile)}
                alt={litter.name}
              />
            </div>
            <div className="w-full p-1 h-[55%]">
              <GatsbyImage
                className="block h-full w-full rounded-lg 2xl:rounded-2xl max-h-none lg:max-h-[1000px]"
                image={getImage(litter.images?.[2]?.localFile)}
                alt={litter.name}
              />
            </div>
          </div>
          <div className="flex w-full flex-wrap">
            <div className="w-full p-1 h-[55%]">
              <GatsbyImage
                className="block h-full w-full rounded-lg 2xl:rounded-2xl"
                image={getImage(litter.images?.[3]?.localFile)}
                alt={litter.name}
              />
            </div>
            <div className="w-1/2 p-1 h-[45%]">
              <GatsbyImage
                className="block h-full w-full rounded-lg 2xl:rounded-2xl"
                image={getImage(litter.images?.[4]?.localFile)}
                alt={litter.name}
              />
            </div>
            <div className="w-1/2 p-1 h-[45%]">
              <GatsbyImage
                className="block h-full w-full rounded-lg 2xl:rounded-2xl"
                image={getImage(litter.images?.[5]?.localFile)}
                alt={litter.name}
              />
            </div>
          </div>
        </div>
        {/* <div className="image-wrapper">
          {litter.images.slice(0, 8).map((image, i) => (
            <GatsbyImage
              image={getImage(image?.localFile)}
              alt={litter.name}
              style={{
                width: "25%",
                height: `${getRandomSize(100, 200)}px`,
              }}
            />
          ))}
        </div> */}
        <h3 className={styles.litterName}>{litter.name}</h3>
      </Link>
    </li>
  )
}

export default LitterCard
