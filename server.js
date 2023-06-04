import express from "express";
const app = express();
const PORT = 8000;
//middelware
app.use(express.json());
//api endpoints
import taskRouter from "./src/routers/taskRouter.js";
app.use("/api/v1/task", taskRouter);
//Task CRUD

//read data from database

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Server running as normal",
  });
});

app.listen(PORT, (error) => {
  error && console.log(error.message);

  console.log(`Server started and running at http://localhost:${PORT}`);
});
