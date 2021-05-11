import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import schema from './schema';
import resolvers from './resolvers';
import dataSources from './datasource'

const app = express();

app.use(cors())

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    dataSources,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});