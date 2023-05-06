import { ApolloServer } from "apollo-server-express";

import { schema } from "./schema/index.js";

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ req })
});

await server.start();

export default server