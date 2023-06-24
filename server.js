import dotenv from "dotenv";
dotenv.config();
import express from "express";

import cors from "cors";
import path from "path";

const __dirname = path.resolve();
console.log(__dirname);
const app = express();
import taskRouter from "./src/router/taskRouter.js";
const PORT = process.env.PORT || 8000;
import { mongoConnect } from "./src/config/mongoDB.js";

app.use(express.json());
app.use(cors());
app.use("/api/v1/task", taskRouter);
app.use(express.static(__dirname + "/build"));
app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
mongoConnect()
  .then(() => {
    app.listen(PORT, (error) => {
      error
        ? console.log(error.message)
        : console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
