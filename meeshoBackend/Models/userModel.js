import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  meeshoUser: {
    type: String,
    required: true,
  },
  meeshoEmail: {
    type: String,
    required: true,
  },
  meeshoPassword: {
    type: String,
    required: true,
  },
  meeshoRole: {
    type: String,
    enum: ["Buyer", "Seller", "Admin"],
    default: "Buyer",
  },
  cart: {
    type: [String],
  },
});

export default mongoose.model("User", userSchema);
