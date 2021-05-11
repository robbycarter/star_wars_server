import { gql } from 'apollo-server-express';


import peopleSchema from './people';
import homeworldSchema from './homeworld'

const linkSchema = gql `
  type Query {
    _: Boolean
  }
`;

export default [linkSchema, homeworldSchema, peopleSchema];