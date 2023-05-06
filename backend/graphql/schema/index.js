import { mergeTypeDefs} from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { userType, usersResolver } from "./users.js";
import { bookType, booksResolver } from "./books.js";
import { ratingType, ratingsResolver } from "./ratings.js";
import { userBooksResolver, userBooksType } from "./userbooks.js";

const typesArray = [userType, bookType, ratingType, userBooksType];

const typeDefs = mergeTypeDefs(typesArray);

const resolvers = [usersResolver, booksResolver, ratingsResolver, userBooksResolver];

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
