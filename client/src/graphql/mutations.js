import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      userId
      token
      tokenExpiration
      userType
    }
  }
`;

export const REGISTER_USER = gql`
  mutation Signup($username: String!, $password: String!, $userType: UserType!) {
    signup(userInput: { username: $username, password: $password, userType: $userType }) {
      userId
      token
      tokenExpiration
    }
  }
`;
