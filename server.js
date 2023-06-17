import express from "express";
import cors from "cors";

const app = express();
import taskRouter from "./src/router/taskRouter.js";
const PORT = 8000;
import { mongoConnect } from "./src/config/mongoDB.js";
mongoConnect();
app.use(express.json());
app.use(cors());
app.use("/api/v1/task", taskRouter);
// app.get("/", (req, res) => {
//   res.json({ message: "server running healthy" });
// });

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server running at http://localhost:${PORT}`);
});
