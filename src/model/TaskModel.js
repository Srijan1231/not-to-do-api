// model does the queries

import TaskModelSchema from "./TaskModelSchema.js";

// C Create data indb
export const createTask = (taskObj) => {
  return TaskModelSchema(taskObj).save();
};

export const readTasks = () => {
  return TaskModelSchema.find();
};
export const switchTask = (_id, type) => {
  return TaskModelSchema.findByIdAndUpdate(_id, { type });
};
export const deleteTaskById = (_id) => {
  return TaskModelSchema.findByIdAndDelete(_id);
};
export const deleteManyTasks = (ids) => {
  return TaskModelSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
