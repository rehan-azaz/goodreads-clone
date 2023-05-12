import { gql } from "@apollo/client";

export const ALL_BOOKS = gql`
  query allBooks {
    books {
      _id
      title
      author
      published
      bookCollection
      description
      createdBy
      createdAt
      updatedAt
      avgRating
      shelve
      rating {
        rating
        review
        ratingUser {
          id
          name
        }
      }
    }
  }
`;

export const BOOK_BY_ID = gql`
  query bookById($id: ID!) {
    bookById(id: $id) {
      _id
      title
      author
      published
      bookCollection
      description
      createdBy
      createdAt
      updatedAt
      avgRating
      shelve
      rating {
        rating
        review
        ratingUser {
          id
          name
        }
      }
    }
  }
`;
