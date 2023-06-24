import express from "express";
import {
  createTask,
  deleteManyTasks,
  readTasks,
  switchTask,
} from "../model/TaskModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const taskList = await readTasks();
  res.json({
    status: "success",
    message: "From Get method",
    taskList,
  });
});

router.post("/", async (req, res) => {
  try {
    const result = await createTask(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "New task has been added successfully",
        })
      : res.json({
          status: "success",
          message: "unable to add the data",
        });
  } catch (error) {
    console.log(error);
  }
});

router.patch("/", async (req, res) => {
  try {
    const { _id, type } = req.body;
    //update data in arrary
    // loop through the array and find matching _id and update the type
    const result = await switchTask(_id, type);
    result?._id
      ? res.json({
          status: "success",
          message: "The task has been switched",
        })
      : res.json({
          status: "error",
          message: "The task did not switch",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: "The task did not switched",
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    const result = await deleteManyTasks(req.body);
    result?.deletedCount > 0
      ? res.json({
          status: "success",
          message: "Task deleted successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to delete the task",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "Failed",
      message: "Task has not been deleted",
    });
  }
});

export default router;
