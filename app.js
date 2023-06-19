const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const fs = require("fs");
const path = require("path");
const { log } = require("console");
const PORT = 3000;

const app = express();
const yamlDir = __dirname;
const yamlFiles = fs
  .readdirSync(yamlDir)
  .filter((file) => file.endsWith(".yaml"));
if (yamlFiles.length > 0) {
  const yamlPath = path.join(yamlDir, yamlFiles[0]);
  const swaggerDocument = YAML.load(yamlPath);
  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} else {
  console.error(`No YAML file found in directory '${yamlDir}'`);
}

app.listen(PORT, () => {
  console.log(`Server started on: http://localhost:${PORT}`);
});
