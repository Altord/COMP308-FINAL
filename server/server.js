require("dotenv").config();
const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ruruHTML } = require("ruru/server");
const schema = require("./src/schema/authSchema");
const emergencySchema = require("./src/schema/emergencySchema");
const resolvers = require("./src/resolvers/authResolvers");
const emergencyResolvers = require("./src/resolvers/emergencyResolvers");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT || 4000;

// CORS configuration
const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:4000",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Use CORS with options
app.use(cors(corsOptions));
app.use(express.json());

const graphqlHandler = createHandler({
  schema: [schema, emergencySchema],
  rootValue: [resolvers, emergencyResolvers],
});

// Methods on `/graphql`
app.all("/graphql", graphqlHandler);

// Serve the GraphiQL IDE using ruru
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.listen(port, () => {
  console.log(`Authentication Service listening at http://localhost:${port}`);
});
