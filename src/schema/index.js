import { gql } from 'apollo-server-express';

const linkSchema = gql `
  type Query {
    _: Boolean
  }
`;

export default [linkSchema];