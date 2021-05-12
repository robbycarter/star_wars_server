import { gql } from 'apollo-server-express';
 
export default gql `
  extend type Query {
    homeworld(id: ID!): Homeworld
  }
 
  type Homeworld {
    name: String!
    gravity: String!
    terrain: String!
    population: String!
  }
`;
