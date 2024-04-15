const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
    userType: UserType!
  }

  input UserInput {
    username: String!
    password: String!
    userType: UserType!
  }

  enum UserType {
    NURSE
    PATIENT
  }

  type Query {
    _dummy: String
  }

  type Mutation {
    signup(userInput: UserInput): AuthData
    login(username: String!, password: String!): AuthData
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);

module.exports = schema;
