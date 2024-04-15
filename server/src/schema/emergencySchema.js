const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Emergency {
    id: ID!
    emergency: String!
    patient: User!
    createdAt: String!
  }

  type User {
    id: ID!
    username: String!
    password: String!
    userType: UserType!
  }

  enum UserType {
    NURSE
    PATIENT
  }

  input EmergencyInput {
    emergency: String!
    patientId: ID!
  }

  type Query {
    getAllEmergencies: [Emergency!]!
  }

  type Mutation {
    postEmergency(emergencyInput: EmergencyInput!): Emergency!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);

module.exports = schema;
