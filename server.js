const express = require("express");
const fs = require("fs");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use(routes);

// Listener
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
