import { isAuthenticated } from "../../middleware/authentication.js";
import { Books } from "../../models/BooksModel.js";
import { uploadImage } from "../../middleware/uploadImage.js";

export const bookType = `
  type Book {
    id: ID!
    title: String!
    author: String!
    date: String!
    coverImage: String
    bookCollection: String!
    createdBy: String!
    createdAt: String
    updatedAt: String
  }

  type BookRating {
    id: ID!
    title: String!
    author: String!
    date: String!
    coverImage: String
    bookCollection: String!
    createdBy: String!
    createdAt: String
    updatedAt: String
    avgRating: Float!
  }

  type Query {
    books: [Book!]
    bookRatings: []
    bookById(id: ID!): Book!
  }

  input BookInput {
    title: String!,
    author: String!, 
    date: String!, 
    coverImage: String, 
    bookCollection: String!
  }

  type Mutation {
    createBook(input: BookInput!): Book!
  }
`;

export const booksResolver = {
  Query: {
    async books(parent, args, context, info) {
      isAuthenticated(context);
      const books = await Books.find();

      if (!books) {
        throw new Error("No Book Found!");
      }

      return books;
    },

    async bookById(parent, args, context, info) {
      await isAuthenticated(context);

      const book = await Books.findById({
        _id: args?.id,
      });

      if (!book) {
        throw new Error("No Book Found!");
      }

      return book;
    },
  },

  Mutation: {
    async createBook(parent, args, context, info) {
      const user = await isAuthenticated(context);
      if (user) {
        const { title, author, coverImage, date, bookCollection } = args;

        const imageUrl = await uploadImage(book.coverImage);

        const book = await Books.create({
          title,
          author,
          date,
          bookCollection,
          coverImage: imageUrl,
          createdBy: user._id,
        });

        return book;
      }
    },
  },
};
