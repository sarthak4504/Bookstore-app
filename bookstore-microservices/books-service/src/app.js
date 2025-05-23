const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const booksRoutes = require("./routes/books");

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/books", booksRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Books Service running on port ${PORT}`));