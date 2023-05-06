import express from "express";
import cors from "cors";

import server from "./graphql/server.js";

const app = express();

app.use(cors());

await server.applyMiddleware({ app, path: '/api/graphql' });

export default app;

export const graphqlPath = server.graphqlPath;