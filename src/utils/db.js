import mongoose from "mongoose";

export const connect = async () => {
  // console.log(process.env.MONGOOSE_URL, "process.env.MONGOOSE_URL");
  // mongodb+srv://gokul332020:sample@cluster0.aoyk9fm.mongodb.net/?retryWrites=true&w=majority
  try {
     await mongoose.connect(process.env.MONGOOSE_URL);
  } catch (error) {
    console.log(error,"ekrjh")
    throw new Error("connection faildd"); 
  }
};
