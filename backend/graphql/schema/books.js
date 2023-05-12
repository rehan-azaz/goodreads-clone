import mongoose from "mongoose";
import { isAuthenticated } from "../../middleware/authentication.js";
import { Books } from "../../models/BooksModel.js";
import uploadScalar from "../scalar/upload.js";
import { uploadImage } from "../../middleware/uploadImage.js";
import { Ratings } from "../../models/RatingsModel.js";

export const bookType = `
  scalar Upload 

  type Book {
    id: ID!
    title: String!
    author: String!
    published: String!
    coverImage: String
    description: String
    bookCollection: String!
    createdBy: String!
    createdAt: String
    updatedAt: String
  }

  type RatingUser {
    id: String
    name: String
  }

  type Rating { 
    rating: Float
    review: String
    ratingUser: RatingUser
  }

  type BookRating {
    _id: ID!
    title: String!
    author: String!
    published: String!
    coverImage: String
    description: String
    bookCollection: String!
    createdBy: ID!
    createdAt: String
    updatedAt: String
    shelve: String
    avgRating: Float!
    rating: [Rating!]
  }

  type Query {
    books: [BookRating!]
    bookById(id: ID!): BookRating!
  }

  type Mutation {
    createBook(title: String!,
      author: String!, 
      published: String!, 
      coverImage: Upload, 
      bookCollection: String
      description: String): Book!
  }
`;

export const booksResolver = {
  Query: {
    async books(parent, args, context, info) {
      const user = await isAuthenticated(context);

      const books = await Books.aggregate([
        {
          $lookup: {
            from: "ratings",
            localField: "_id",
            foreignField: "book",
            as: "ratings",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "ratings.user",
            foreignField: "_id",
            as: "users",
          },
        },
        {
          $lookup: {
            from: "userbooks",
            let: { bookId: "$_id", userId: user._id },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$book", "$$bookId"] },
                      { $eq: ["$user", "$$userId"] },
                    ],
                  },
                },
              },
              { $project: { _id: 0, shelve: 1 } },
            ],
            as: "userBook",
          },
        },
        {
          $project: {
            _id: 1,
            title: 1,
            author: 1,
            published: 1,
            description: 1,
            coverImage: 1,
            bookCollection: 1,
            createdBy: 1,
            createdAt: 1,
            updatedAt: 1,
            shelve: { $arrayElemAt: ["$userBook.shelve", 0] },
            rating: {
              $map: {
                input: "$ratings",
                as: "rating",
                in: {
                  _id: "$$rating.id",
                  rating: "$$rating.rating",
                  review: "$$rating.review",
                  user: {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: "$users",
                          as: "user",
                          cond: { $eq: ["$$user._id", "$$rating.user"] },
                        },
                      },
                      0,
                    ],
                  },
                },
              },
            },
          },
        },
        {
          $project: {
            _id: 1,
            title: 1,
            author: 1,
            published: 1,
            description: 1,
            coverImage: 1,
            bookCollection: 1,
            createdBy: 1,
            createdAt: 1,
            updatedAt: 1,
            rating: {
              $map: {
                input: "$rating",
                as: "rating",
                in: {
                  rating: "$$rating.rating",
                  review: "$$rating.review",
                  user: {
                    id: "$$rating.user._id",
                    name: "$$rating.user.name",
                  },
                },
              },
            },
            avgRating: { $avg: "$rating.rating" },
            shelve: 1,
          },
        },
      ]);

      if (!books || books.length === 0) {
        throw new Error("No Books Found!");
      }

      return books;
    },

    async bookById(parent, args, context, info) {
      await isAuthenticated(context);

      const user = await isAuthenticated(context);
      const _id = new mongoose.Types.ObjectId(args?.id);

      const book = await Books.aggregate([
        {
          $match: { _id },
        },
        {
          $lookup: {
            from: "ratings",
            localField: "_id",
            foreignField: "book",
            as: "ratings",
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "ratings.user",
            foreignField: "_id",
            as: "users",
          },
        },
        {
          $lookup: {
            from: "userbooks",
            let: { bookId: "$_id", userId: user._id },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$book", "$$bookId"] },
                      { $eq: ["$user", "$$userId"] },
                    ],
                  },
                },
              },
              { $project: { _id: 0, shelve: 1 } },
            ],
            as: "userBook",
          },
        },
        {
          $project: {
            _id: 1,
            title: 1,
            author: 1,
            published: 1,
            description: 1,
            coverImage: 1,
            bookCollection: 1,
            createdBy: 1,
            createdAt: 1,
            updatedAt: 1,
            shelve: { $arrayElemAt: ["$userBook.shelve", 0] },
            rating: {
              $map: {
                input: "$ratings",
                as: "rating",
                in: {
                  _id: "$$rating.id",
                  rating: "$$rating.rating",
                  review: "$$rating.review",
                  user: {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: "$users",
                          as: "user",
                          cond: { $eq: ["$$user._id", "$$rating.user"] },
                        },
                      },
                      0,
                    ],
                  },
                },
              },
            },
          },
        },
        {
          $project: {
            _id: 1,
            title: 1,
            author: 1,
            published: 1,
            description: 1,
            coverImage: 1,
            bookCollection: 1,
            createdBy: 1,
            createdAt: 1,
            updatedAt: 1,
            rating: {
              $map: {
                input: "$rating",
                as: "rating",
                in: {
                  rating: "$$rating.rating",
                  review: "$$rating.review",
                  user: {
                    id: "$$rating.user._id",
                    name: "$$rating.user.name",
                  },
                },
              },
            },
            avgRating: { $avg: "$rating.rating" },
            shelve: 1,
          },
        },
      ]);

      if (!book) {
        throw new Error("No Book Found!");
      }

      if (book && book?.length > 0) {
        return book[0];
      }
    },
  },

  Mutation: {
    async createBook(parent, args, context, info) {
      const user = await isAuthenticated(context);
      if (user) {
        const { title, author, coverImage, published, description } = args;

        const imageUrl = await uploadImage(coverImage);

        const book = await Books.create({
          title,
          author,
          published,
          coverImage: imageUrl,
          createdBy: user._id,
          description,
        });

        return book;
      }
    },
  },
};
