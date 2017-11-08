import express from 'express';
import expressGraphQL from 'express-graphql';
import {graphql, buildSchema} from 'graphql';

import {schema} from './graphql/schemas';
import resolvers from './graphql/resolvers';

const app = express();

app
  .use('/graphql',
    expressGraphQL({
      schema,
      rootValue: {...resolvers},
      graphiql: true
    })
  )
  .listen(3000);

console.log(`Try a GraphQL API server at localhost:3000/graphql`);
