import React from 'react'
import Image from 'next/image'
import { SingleArticle_articles_author } from '../../../apollo/__generated__/SingleArticle'
import { ImageFormats } from '../../../apollo/jsonModels/ImageFormats'

export interface AuthorAboutProps {
  author: SingleArticle_articles_author
}

export const AuthorAbout: React.FC<AuthorAboutProps> = ({
  author: { about, email, fullname, profilePicture },
}) => {
  return (
    <div className="p-4 rounded-sm flex gap-4 lg:items-center lg:flex-col">
      <div className="relative mt-7 lg:mt-0 object-cover w-24 h-24 min-w-[96px] rounded-full overflow-hidden ring-2 ring-warmGray-500 ring-offset-2 shadow-md">
        <Image
          src={
            profilePicture
              ? (profilePicture.formats as ImageFormats).thumbnail.url
              : 'https://i.pravatar.cc/300'
          }
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col items-start lg:items-center text-warmGray-500">
        <span className="font-thin leading-10">about the author</span>
        <span className="text-left lg:text-center lg:leading-9">{`Hi! I am ${fullname}.`}</span>
        <p className="font-light mt-2 min-w-[200px] lg:text-center break-words lg:max-w-xs">
          {about}
        </p>

        <p className="font-thin text-center mt-4">shoot me an email at:</p>
        <a
          href={`mailto:${email}`}
          className="font-light lg:text-center text-rose-500 cursor-pointer text-left hover:text-rose-400 break-all"
        >
          {email}
        </a>
      </div>
    </div>
  )
}

export default AuthorAbout
