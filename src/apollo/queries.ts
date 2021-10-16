import { gql } from '@apollo/client'

export const GET_FEATURED_ARTICLES = gql`
  query FeaturedArticles {
    articles(limit: 6) {
      id
      published_at
      title
      slug
      content
      author {
        id
        username
        profilePicture {
          url
        }
      }
      image {
        id
        url
        width
        height
      }
    }
  }
`
export const GET_SINGLE_ARTICLE = gql`
  query SingleArticle($slug: String!) {
    articles(where: { slug: $slug }) {
      id
      title
      published_at
      author {
        fullname
        email
        about
        profilePicture {
          url
        }
      }
      content
      image {
        url
        width
        height
      }
    }
  }
`
