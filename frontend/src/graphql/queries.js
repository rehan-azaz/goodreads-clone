import { gql } from "@apollo/client";

export const ALL_BOOKS = gql`
  query allBooks {
    books {
      id
      title
      author
      date
      bookCollection
      createdBy
      createdAt
      updatedAt
    }
  }
`;

export const BOOK_BY_ID = gql`
  query bookById($id: ID!) {
    bookById(id: $id) {
      id
      title
      author
      date
      coverImage
      bookCollection
      createdBy
    }
  }
`;
