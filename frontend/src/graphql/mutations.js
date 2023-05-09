import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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

export const REGISTER = gql`
  mutation register(
    $name: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      name: $name
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      user {
        id
        name
        username
        email
        role
        status
      }
      token
    }
  }
`;