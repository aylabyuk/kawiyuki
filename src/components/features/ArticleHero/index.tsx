import React from 'react'
import Image from 'next/image'
import formatDistance from 'date-fns/formatDistance'
import ClockIcon from '@heroicons/react/outline/ClockIcon'
import { motion } from 'framer-motion'
import { ImageFormats } from '../../../apollo/jsonModels/ImageFormats'

export interface ArticleHeroProps {
  title: string
  image: ImageFormats
  published: Date
  minutesRead: string
}

const heroVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

const titleVariant = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,
  },
}

export const ArticleHero: React.FC<ArticleHeroProps> = ({
  image,
  title,
  published,
  minutesRead,
}) => {
  return (
    <div className="h-[60vh] relative mb-14">
      <motion.div
        className="absolute w-full h-full bg-cover rounded-lg shadow-md"
        variants={heroVariant}
        initial="hidden"
        animate="visible"
        style={{ backgroundImage: `url(${image.thumbnail.url})` }}
      >
        <div className="w-full h-full backdrop-filter rounded-lg bg-rose-100 bg-opacity-60 backdrop-blur-2xl border" />
        <Image
          src={image ? image.large.url : 'https://picsum.photos/500'}
          alt="test"
          layout="fill"
          objectFit="contain"
          priority
        />
      </motion.div>

      <motion.div
        variants={titleVariant}
        initial="hidden"
        animate="visible"
        className="absolute text-gray-500 top-[-5%] left-3 bg-white p-4 rounded-lg max-w-[90%] min-w-[50%] ring-4 ring-rose-400 shadow-xl"
      >
        <h1 className="font-light text-xl md:text-4xl mb-4">{title}</h1>
        <div className="text-rose-600 flex flex-row w-full justify-between mt-2">
          <span>
            {formatDistance(published, new Date(), {
              addSuffix: true,
            })}
          </span>
          <div className="flex gap-2 justify-between">
            <ClockIcon className="w-[24px]" />
            <span>{minutesRead}</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ArticleHero
