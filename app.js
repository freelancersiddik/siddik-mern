const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/route");
const app = express();

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 4000;
// set router and json
app.use(express.json());
require("./db/conn");
app.use(router);

// Database
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
