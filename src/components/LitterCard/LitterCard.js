import * as React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import * as styles from "./LitterCard.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const LitterCard = ({ litter, urlBase, className }) => {
  const { language } = useI18next()

  return (
    <li className={`${styles.litterCard} ${className}`}>
      <Link to={`${urlBase}${litter[language]}`}>
        <div className="-m-1 flex flex-row h-[600px]">
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
        <h3 className={styles.litterName}>{litter.name}</h3>
      </Link>
    </li>
  )
}

export default LitterCard
