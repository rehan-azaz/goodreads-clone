import { model, Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    published: {
      type: Date,
      required: true,
    },
    coverImage: {
      type: String,
    },
    description: {
      type: String,
    },
    bookCollection: {
      type: String,
      enum: ["Want to read", "Reading", "Read"],
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    genre: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export const Books = model("Books", bookSchema);
