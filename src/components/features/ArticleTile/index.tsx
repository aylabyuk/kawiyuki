import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Markdown from 'react-markdown'
import { motion } from 'framer-motion'

import { FeaturedArticles_articles } from '../../../apollo/__generated__/FeaturedArticles'

const imageVariant = {
  hidden: {
    height: '0%',
  },
  visible: {
    height: '60%',
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0,
    },
  },
}

export const ArticleTile: React.FC<FeaturedArticles_articles> = ({
  title,
  content,
  image,
  slug,
}) => {
  return (
    <Link href={`articles/${slug}`}>
      <div className="group rounded-md bg-warmGray-500 overflow-hidden cursor-pointer flex flex-col h-[600px] md:h-[500px] lg:h-[540px] xl:h-auto shadow-md">
        <motion.div
          variants={imageVariant}
          className="overflow-hidden relative"
        >
          <Image
            className="transform transition-transform duration-500 group-hover:scale-105"
            src={`${process.env.NEXT_PUBLIC_API}${image?.url}`}
            alt="test"
            layout="fill"
            objectFit="cover"
            width={image!.width || 500}
            height={image!.height || 500}
          />
        </motion.div>

        <div className="flex-grow p-4 transform transition-colors duration-500 text-white flex flex-col justify-between">
          <div>
            <p className="mb-3 text-lg">{title}</p>
            <Markdown className="line-clamp-5 font-extralight">
              {content!}
            </Markdown>
          </div>
          <a className="pt-8 transform transition-all duration-500 self-end text-warmGray-50 group-hover:text-warmGray-900">
            READ MORE
          </a>
        </div>
      </div>
    </Link>
  )
}

export default ArticleTile