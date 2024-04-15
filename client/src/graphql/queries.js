import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    currentUser {
      id
      username
      userType
    }
  }
`;

export const GET_ALL_EMERGENCIES = gql`
  query GetAllEmergencies {
    getAllEmergencies {
      id
      emergency
      patient {
        id
        // Include other user properties if needed
      }
      createdAt
    }
  }
`;
