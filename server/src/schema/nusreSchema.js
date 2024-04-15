// Import necessary modules
const { buildSchema } = require('graphql');

// Define the GraphQL schema
const schema = buildSchema(`
  type VitalSign {
    id: ID!
    userId: ID!
    bodyTemperature: Float!
    heartRate: Int!
    bloodPressure: String!
    respiratoryRate: Int!
    timestamp: String!
  }

  type MotivationalTip {
    id: ID!
    tipText: String!
    timestamp: String!
  }

  type Query {
    vitalSigns: [VitalSign]
    vitalSign(id: ID!): VitalSign
    getPreviousVitalSigns(userId: ID!): [VitalSign]
  }

  type Mutation {
    enterVitalSigns(userId: ID!, bodyTemperature: Float!, heartRate: Int!, bloodPressure: String!, respiratoryRate: Int!): VitalSign!
    sendMotivationalTip(userId: ID!, tipText: String!): MotivationalTip!
    generateMedicalConditionsList(symptoms: [String]!): [String]!
  }
`);

// Export the schema
module.exports = schema;
