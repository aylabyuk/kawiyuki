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
          formats
        }
      }
      image {
        formats
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
          formats
        }
      }
      content
      image {
        formats
      }
    }
  }
`
