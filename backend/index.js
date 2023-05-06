import { config } from "dotenv";

config();

import { connectDatabase } from "./config/database.js";
import app from "./app.js";
import { graphqlPath } from "./app.js";

const port = process.env.PORT || 5001;
connectDatabase();

const httpServer = app.listen(port, () => {
  const address = httpServer.address();
  console.log(
    `🚀 Server ready at http://localhost:${address.port}${graphqlPath}`
  );
});
