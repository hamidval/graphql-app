 
import {config} from './config';
import { initModels as OaInitModels } from './DB/models/init-models';
import { Lesson } from './DB/models/Lesson';
import { sequelizeOa } from './DB/singlton';
const { ApolloServer } = require('apollo-server');
import * as dotenv from 'dotenv';
dotenv.config();
OaInitModels(sequelizeOa)





// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer(config);

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

