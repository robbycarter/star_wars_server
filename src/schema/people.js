import { gql } from 'apollo-server-express';

export default gql `
  extend type Query {
    people(
      pageNumber: Int
    ): People
    person(id: ID!): Person
    searchPerson (name: String!) : People
  }

  type People {
    count: Int!
    hasMore: Boolean!
    results: [Person]!
  }
 
  type Person {
    id: ID!
    name: String!
    height: String!
    mass: String!
    gender: String!
    homeworld: Homeworld!
  }
`;