import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    const dbLink =
      process.env.NODE_ENV !== "production"
        ? "mongodb://localhost:27017/to-do-list"
        : process.env.MONGO_CLIENT;
    // const con = await mongoose.connect();
    const con = await mongoose.connect(dbLink);

    con && console.log("mongo is connected");
  } catch (error) {
    console.log(error);
    throw new error(error);
  }
};
