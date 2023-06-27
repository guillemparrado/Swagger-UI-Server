const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const fs = require("fs");
const path = require("path");
const { parseArgs } = require("./argsParser");

const DEFAULT_PORT = 3000;

const args = parseArgs(process.argv);

if (args.main.length <= 0) console.log("Error: OpenAPI file name missing.");

if (!args.hasOwnProperty("p")) args.p = DEFAULT_PORT;

const app = express();

const swaggerDocument = YAML.load(args.main[0]);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(args.p, () => {
  console.log(`Server started on: http://localhost:${args.p}`);
});