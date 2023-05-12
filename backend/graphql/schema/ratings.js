import { isAuthenticated } from "../../middleware/authentication.js";
import { Ratings } from "../../models/RatingsModel.js";

export const ratingType = `
  type Rating {
    id: ID!
    rating: Float!
    review: String
    user: String!
    book: String!
    createdAt: String
    updatedAt: String
  }

  type Query {
    ratings: [Rating!]
  }
  type Mutation {
    addRating(rating: Float!, review: String, book: String!): Rating!
  }
`;

export const ratingsResolver = {
  Query: {
    async ratings(parent, args, context, info) {
      isAuthenticated(context);
      const ratings = await Ratings.find();

      if (!ratings) {
        throw new Error("No Rating Found!");
      }

      return ratings;
    },
  },

  Mutation: {
    async addRating(parent, args, context, info) {
      const user = await isAuthenticated(context);
      if (user) {
        const rating = await Ratings.create({
          ...args,
          user: user._id,
        });

        return rating;
      }
    },
  },
};
