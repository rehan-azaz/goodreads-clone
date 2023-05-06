import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation {
    login(username: "rehani", password: "123456") {
      user {
        id
        name
        email
        username
        role
        status
      }
      token
    }
  }
`;
