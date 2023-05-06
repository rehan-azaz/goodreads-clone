import { model, Schema } from "mongoose";

const userBooksSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    book: {
      type: Schema.Types.ObjectId,
      ref: "Books",
      required: true,
    },
    bookCollection: {
      type: String,
      enum: ["Want to read", "Reading", "Read"],
      required: true,
    },
    finished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserBooks = model("UserBooks", userBooksSchema);
