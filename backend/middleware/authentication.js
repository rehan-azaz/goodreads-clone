import jwt from "jsonwebtoken";
import { Users } from "../models/UsersModel.js";
import { AuthenticationError } from "apollo-server";

export const isAuthenticated = async (context) => {
  const secretKey = process.env.JWT_SECRET;

  const authorizationHeader = context.req.headers.authorization;

  if (authorizationHeader) {
    const token = authorizationHeader.split("Bearer ")[1];

    try {
      // Decode the token to extract the user ID
      let decodedToken = jwt.verify(token, secretKey);
      const userId = decodedToken.user._id;

      // Retrieve the user information from the database
      const user = await Users.findById(userId);

      context.user = user;
      return user;
    } catch (err) {
      // Token is invalid or expired
      throw new AuthenticationError("Token is invalid or expired");
    }
  } else {
    // Token not provided
    throw new AuthenticationError("Authorization header not provided");
  }
};
