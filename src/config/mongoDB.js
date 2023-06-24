import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    const dbLink =
      process.env.NODE_ENV !== "production"
        ? process.env.MONGO_CLIENT
        : "mongodb://localhost:27017/to-do-list";
    // const con = await mongoose.connect();
    const con = await mongoose.connect(dbLink);

    con && console.log("mongo is connected");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
