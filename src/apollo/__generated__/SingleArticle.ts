/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SingleArticle
// ====================================================

export interface SingleArticle_articles_author_profilePicture {
  __typename: "UploadFile";
  url: string;
}

export interface SingleArticle_articles_author {
  __typename: "UsersPermissionsUser";
  fullname: string | null;
  email: string;
  about: string | null;
  profilePicture: SingleArticle_articles_author_profilePicture | null;
}

export interface SingleArticle_articles_image {
  __typename: "UploadFile";
  url: string;
  width: number | null;
  height: number | null;
}

export interface SingleArticle_articles {
  __typename: "Article";
  id: string;
  title: string | null;
  published_at: any | null;
  author: SingleArticle_articles_author | null;
  content: string | null;
  image: SingleArticle_articles_image | null;
}

export interface SingleArticle {
  articles: (SingleArticle_articles | null)[] | null;
}

export interface SingleArticleVariables {
  slug: string;
}
