import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
import path from "path";

const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/build"));

//api endpoints
import taskRouter from "./src/router/taskRouter.js";

app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "server running as normal",
  });
});
const dbLink =
  process.env.NODE_ENV !== "production"
    ? process.env.MONGO_CLIENT
    : "mongodb://localhost:27017/to-do-list";
// const con = await mongoose.connect();
mongoose
  .connect(dbLink)

  .then(() => {
    app.listen(PORT, (error) => {
      error && console.log(error.message);

      console.log(`
    server running at http://localhost:${PORT}
    `);
    });
  });
// server listening the port
