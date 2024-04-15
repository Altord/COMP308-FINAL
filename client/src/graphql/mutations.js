import { gql } from "@apollo/client";

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
  mutation Signup(
    $username: String!
    $password: String!
    $userType: UserType!
  ) {
    signup(
      userInput: {
        username: $username
        password: $password
        userType: $userType
      }
    ) {
      userId
      token
      tokenExpiration
    }
  }
`;

export const POST_EMERGENCY = gql`
  mutation PostEmergency($emergency: String!, $patientId: ID!) {
    postEmergency(
      emergencyInput: { emergency: $emergency, patientId: $patientId }
    ) {
      id
      emergency
      patient {
        id
      }
      createdAt
    }
  }
`;
