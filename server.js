import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

const PORT = 8000 || process.env.PORT;
import path from "path";

const __dirname = path.resolve();
console.log(__dirname);

// connect mongoDb

// import { mongoConnect } from "./src/config/mongoDb.js";
// mongoConnect();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/build"));

//api endpoints
import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

console.log(process.env.NODE_ENV);

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
