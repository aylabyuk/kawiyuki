import React, { useCallback } from 'react'
import Markdown from 'react-markdown'
import { useRouter } from 'next/router'
import ChevronLeftIcon from '@heroicons/react/outline/ChevronLeftIcon'
import ThumbUpIcon from '@heroicons/react/solid/ThumbUpIcon'

import { SingleArticle_articles } from '../../../apollo/__generated__/SingleArticle'
import ArticleHero from '../../features/ArticleHero'
import calculateReadTime from '../../../utils/calculateReadTime'
import AuthorAbout from '../../features/AuthorAbout'
import FacebookIcon from '../../vectors/socials/FacebookIcon'
import TweeterIcon from '../../vectors/socials/TweeterIcon'

export interface ArticleLayoutProps {
  article: SingleArticle_articles
}

export const ArticlesLayout: React.FC<ArticleLayoutProps> = ({
  article: { image, title, content, published_at, author },
}) => {
  const router = useRouter()

  const handleBack = useCallback(() => router.back(), [router])

  return (
    <>
      <button
        onClick={handleBack}
        className="mb-16 font-bold text-white bg-warmGray-500 px-3 py-2 rounded-full flex flex-row items-center shadow-sm ring-offset-2 ring-warmGray-500 hover:ring-2"
      >
        <ChevronLeftIcon className="w-5 h-5" />
        <span className="px-2">Back</span>
      </button>

      <ArticleHero
        image={image.formats}
        title={title!}
        published={new Date(published_at)}
        minutesRead={calculateReadTime(content || '')}
      />

      <div className="flex flex-col-reverse lg:flex-row gap-4 content-center">
        <div className="flex flex-col-reverse lg:flex-col">
          <AuthorAbout author={author!} />

          <div className="lg:sticky border-b-2 lg:border-0 top-8 gap-10 flex flex-row py-4 lg:py-0 lg:flex-col justify-center items-center lg:pt-12 lg:gap-6">
            <ThumbUpIcon className="transform transition-all w-8 text-rose-300 hover:text-rose-500 hover:scale-125 cursor-pointer" />
            <FacebookIcon className="transform transition-all w-8 fill-current text-blue-300 hover:text-blue-700 hover:scale-125 cursor-pointer" />
            <TweeterIcon className="transform transition-all w-8 fill-current text-sky-300 hover:text-sky-600 hover:scale-125 cursor-pointer" />
          </div>
        </div>

        <article className="prose prose-rose max-w-none">
          <Markdown>{content!}</Markdown>
        </article>
      </div>
    </>
  )
}

export default ArticlesLayout
