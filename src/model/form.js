

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    rating: {
      type:String,
    }
  },
  { timestamps: true }
);

export default mongoose?.models?.uss || mongoose?.model("uss", userSchema);
