const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const config = require("./serverConfig");
const routeCups = require("../routes/cups");
var cors = require("cors");

const app = express();

app.use(cors());
app.use(logger("tiny"));
app.use(bodyParser.json());

app.use("/", routeCups);

app.use((req, res, next) => {
  const err = new Error(`Url no encontrada ${req.method} ${req.url} `);
  err.code = 400;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(123, err);
  res.status(err.code || 500);
  res.json({
    error: {
      code: err.code,
      message: err.message,
    },
  });
});

app.listen(config.server.port, () => {
  console.log(`${config.server.name} en el puerto ${config.server.port} medio ambiente: ${config.node}`);
});
