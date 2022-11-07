// {
//   id: 1,
//   email: "javiercarrionramos@gmail.com",
//   password: "xxx",
//   name: "Javier",
//   lastName: "Carrion",
//   age: 26,
//   address: "Atahualpa 235",
// }

import mongoose from "mongoose";

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
});

export default mongoose.model("User", userSchema);
