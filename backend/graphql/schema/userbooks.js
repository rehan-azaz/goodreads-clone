import { isAuthenticated } from "../../middleware/authentication.js";
import { UserBooks } from "../../models/UserBooksModel.js";

export const userBooksType = `
  type UserBook {
    id: ID!
    user: String!
    book: String!
    shelve: String
    finished: Boolean
    createdAt: String
    updatedAt: String
  }

  type Query {
    userBooks: [UserBook!]
    getUserBooksByUser(user: String!): [UserBook!]
}
type Mutation {
    addUserBooks(user: String!, book: String!, shelve: String!, finished: Boolean): UserBook!
  }
`;

export const userBooksResolver = {
  Query: {
    async userBooks(parent, args, context, info) {
      isAuthenticated(context);
      const userBooks = await UserBooks.find();

      if (!userBooks) {
        throw new Error("No UserBook Found!");
      }

      return userBooks;
    },

    async getUserBooksByUser(parent, args, context, info) {
      isAuthenticated(context);
      const { user } = args;
      const userBooks = await UserBooks.find({user});

      if (!userBooks) {
        throw new Error(`No UserBook Found for ${user}`);
      }

      return userBooks;
    },
  },

  Mutation: {
    async addUserBooks(parent, args, context, info) {
      const user = await isAuthenticated(context);
      if (user) {
        const userBooks = await UserBooks.create({
          ...args,
        });

        return userBooks;
      }
    },
  },
};
