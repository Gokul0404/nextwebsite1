import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },

    email: {
      type: String
    },
    number: {
      type: String
    },
  },
  { timestamps: true }
);

export default mongoose.models.dets|| mongoose.model("dets", userSchema)
