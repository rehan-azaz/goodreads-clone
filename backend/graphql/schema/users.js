import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Users } from "../../models/UsersModel.js";
import { isAuthenticated } from "../../middleware/authentication.js";

export const userType = `
  type User {
    id: ID!
    name: String!
    username: String
    email: String!
    role: String!
    status: String!
    image: String
    createdAt: String
    updatedAt: String
  }
  
  type LoginInput {
    username: String,
    email: String,
    password: String!
  }

  type UserResponse {
    user: User!,
    token: String!
  }

  type CreateUserInput {
    name: String!,
    username: String,
    email: String!,
    password: String!,
    confirmPassword: String!,
    image: String,
    role: String!
  }

  type RegisterInput {
    name: String!,
    username: String,
    email: String!,
    password: String!,
    confirmPassword: String!,
    image: String
  }

  type Query {
    users: [User!]
  }

  type Mutation {
    createUser(name: String!, username: String, email: String!,password: String!, confirmPassword: String!, image: String, role: String, status: String): UserResponse!,
    login(username: String, email: String, password: String!): UserResponse!,
    register(name: String!, username: String, email: String!, password: String!, confirmPassword: String!, image: String): UserResponse!
  }
`;

export const usersResolver = {
  Query: {
    users: async (parent, args, context, info) => {
      await isAuthenticated(context);
      return await Users.find();
    },
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      await isAuthenticated(context);
      const { name, email, username, role, password, confirmPassword } = args;

      let user = await Users.findOne({ email: email });

      if (user) {
        throw new Error("User already exists!");
      }

      if (password != confirmPassword) {
        throw new Error("Password does not match!");
      }

      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(password, salt);

      user = new Users({
        name,
        email,
        username,
        password: hashedPassword,
        role,
      });

      await user.save();

      const token = generateToken(user);

      return { user, token };
    },

    login: async (parent, args, context, info) => {
      const { email, username, password } = args;
      if (!username && !email) {
        throw new Error("Username or Email required!");
      }
      let user = await Users.findOne({
        $or: [{ username: username }, { email: email }],
      });

      if (!user) {
        throw new Error("Invalid username or password");
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        throw new Error("Invalid username or password");
      }

      await user.save();

      const token = generateToken(user);

      return { user, token };
    },

    register: async (parent, args) => {
      const { name, email, username, password, confirmPassword } = args;

      let user = await Users.findOne({ email: email });

      if (user) {
        throw new Error("User already exists!");
      }

      if (password != confirmPassword) {
        throw new Error("Password does not match!");
      }

      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(password, salt);

      user = new Users({
        name,
        email,
        username,
        password: hashedPassword,
      });

      await user.save();

      const token = generateToken(user);

      return { user, token };
    },
  },
};

const generateToken = (user) => {
  const secretKey = process.env.JWT_SECRET;
  return jwt.sign({ user }, secretKey, { expiresIn: "1h" });
};
