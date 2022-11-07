import mongoose from "mongoose";

const socialNetworks = mongoose.Schema({
  facebook: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    required: false,
  },
  twitter: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
  },
});

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  socialNetworks: {
    type: socialNetworks,
    default: null,
  },
});

export default mongoose.model("User", userSchema);
