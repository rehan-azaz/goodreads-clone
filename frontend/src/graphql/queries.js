import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
  query getAllBooks {
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
