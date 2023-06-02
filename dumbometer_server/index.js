const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const route = require("./routes/index.js");
const app = express();

app.use(express.json());
app.use(cors());

// let start making server
app.use("/", route);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(8000, () => {
      console.log(`we are connected on port 8000`);
    })
  )
  .catch((err) => console.log(err));
