import mongoose from "mongoose";

export const connectDatabase = () => {
  const databaseUrl = process.env.DATABASE;

  mongoose
    .connect(databaseUrl)
    .then(() => {
      console.log("Database connected!");
    })
    .catch((err) => {
      console.log(err);
    });
};
