import { isAuthenticated } from "../../middleware/authentication.js";
import { Books } from "../../models/BooksModel.js";

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

  type Query {
    books: [Book!]
    bookById(id: ID!): Book!
  }
  type Mutation {
    createBook(title: String!, author: String!, date: String!, coverImage: String, bookCollection: String!): Book!
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
        const book = await Books.create({
          ...args,
          createdBy: user._id,
        });

        return book;
      }
    },
  },
};
