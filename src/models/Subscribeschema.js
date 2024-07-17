// models/Subscribeschema.ts
import mongoose from "mongoose";

const Subscribeschema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
});

export default mongoose.models.Subscribe || mongoose.model("Subscribe", Subscribeschema);
