import React from 'react'
import { motion } from 'framer-motion'

import { FeaturedArticles_articles } from '../../../apollo/__generated__/FeaturedArticles'
import ArticleTile from '../../features/ArticleTile'

export interface HomeLayoutProps {
  articles: FeaturedArticles_articles[]
}

const containerVariant = {
  hidden: {
    y: -50,
  },
  visible: {
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ articles }) => {
  return (
    <>
      <p className="text-4xl font-semibold mb-6 text-warmGray-500">Featured</p>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 min-h-screen"
      >
        {articles.map((article) => (
          <ArticleTile key={article.id} {...article} />
        ))}
      </motion.div>
    </>
  )
}

export default HomeLayout
