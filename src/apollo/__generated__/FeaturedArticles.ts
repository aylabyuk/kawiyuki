/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FeaturedArticles
// ====================================================

export interface FeaturedArticles_articles_author_profilePicture {
  __typename: "UploadFile";
  formats: any | null;
}

export interface FeaturedArticles_articles_author {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
  profilePicture: FeaturedArticles_articles_author_profilePicture | null;
}

export interface FeaturedArticles_articles_image {
  __typename: "UploadFile";
  formats: any | null;
}

export interface FeaturedArticles_articles {
  __typename: "Article";
  id: string;
  published_at: any | null;
  title: string | null;
  slug: string | null;
  content: string | null;
  author: FeaturedArticles_articles_author | null;
  image: FeaturedArticles_articles_image | null;
}

export interface FeaturedArticles {
  articles: (FeaturedArticles_articles | null)[] | null;
}
