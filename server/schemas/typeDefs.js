const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Mood {
    _id: ID
    dosed: Boolean!
    depressants: Boolean!
    lifestyle: Int!
    physicalHealth: Int!
    mentalHealth: Int!
    comment: String
  }

  type Consumable {
    _id: ID
    name: String!
    dosage: String!
    note: String
    moods: [Mood]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    consumables: [Consumable]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(consumables: [ID]): User
    addConsumable(name: String, dosage: String, note: String): Consumable
    updateConsumable(moods: [ID]): Consumable
    addMood(dosed: Boolean, depressants: Boolean, lifestyle: Int!, physicalHealth: Int!, mentalHealth: Int!, comment: String): Mood
  }
`;

module.exports = typeDefs;
