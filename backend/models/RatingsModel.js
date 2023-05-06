import  { model, Schema } from "mongoose";

const ratingSchema = new Schema(
  {
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    review: {
      type: String,
      maxLength: 500,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true
    },
    book: {
      type: Schema.Types.ObjectId,
      ref: "Books",
      required: true
    },
  },
  {
    timestamps: true,
  }
);

export const Ratings = model("Ratings", ratingSchema);
