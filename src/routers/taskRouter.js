import express from "express";

const router = express.Router();

let fakeDB = [
  {
    task: "watching tv",
    hr: 33,
    type: "entry",
    _id: "awe",
  },
  {
    task: "watching tv",
    hr: 33,
    type: "entry",
    _id: "100",
  },
  {
    task: "watching tv",
    hr: 33,
    type: "entry",
    _id: "300",
  },
];

router.get("/", (req, res) => {
  res.json({
    message: "here is the list of not-to do task",
    tasklist: fakeDB,
  });
});
//receive data from client and create new record into the database
router.post("/", (req, res) => {
  fakeDB.push(req.body);

  res.json({
    message: "todo to POST method",
  });
});
//update record into the database based on the information received
router.put("/", (req, res) => {
  res.json({
    message: "todo to PUT method",
  });
});
//delete one or many records from database based on the information received
router.delete("/", (req, res) => {
  const { _id } = req.body;
  fakeDB = fakeDB.filter((item) => item._id !== _id);
  res.json({
    message: "The item has been deleted",
  });
});

export default router;
