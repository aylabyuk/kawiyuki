import React from 'react'
import Image from 'next/image'
import { SingleArticle_articles_author } from '../../../apollo/__generated__/SingleArticle'

export interface AuthorAboutProps {
  author: SingleArticle_articles_author
}

export const AuthorAbout: React.FC<AuthorAboutProps> = ({
  author: { about, email, fullname, profilePicture },
}) => {
  return (
    <div className="p-4 rounded-sm w-full flex gap-10 lg:gap-4 lg:flex-col items-center lg:min-w-[250px]">
      <div className="relative object-cover w-24 h-24 min-w-[96px] rounded-full overflow-hidden ring-2 ring-warmGray-500 ring-offset-2 shadow-md">
        <Image
          src={`${process.env.NEXT_PUBLIC_API}${profilePicture?.url}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col items-start lg:items-center text-warmGray-500">
        <span className="font-thin leading-10">about the author</span>
        <span className="text-center leading-9">{`Hi! I am ${fullname}.`}</span>
        <p className="font-light mt-2 lg:text-center">{about}</p>

        <p className="font-thin text-center mt-4">shoot me an email at:</p>
        <a
          href={`mailto:${email}`}
          className="font-light text-center text-rose-500 cursor-pointer hover:text-rose-400"
        >
          {email}
        </a>
      </div>
    </div>
  )
}

export default AuthorAbout
