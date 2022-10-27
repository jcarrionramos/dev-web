import mongoose from "mongoose";

const DB = [
  {
    id: 1,
    email: "javiercarrionramos@gmail.com",
    password: "xxx",
    name: "Javier",
    lastName: "Carrion",
    age: 26,
    address: "Atahualpa 235",
  },
  {
    id: 2,
    email: "jfrez@gmail.com",
    password: "yyy",
    name: "Jonathan",
    lastName: "Frez",
    age: 30,
    address: "Ejercito 443",
  },
  {
    id: 3,
    email: "jperez@gmail.com",
    password: "zzz",
    name: "Juanito",
    lastName: "Perez",
    age: 15,
    address: "No sabemos",
  },
  {
    id: 4,
    email: "canelita@gmail.com",
    password: "aaa",
    name: "Canela",
    lastName: "FIC",
    age: 15,
    address: "Ejercito 443",
  },
];

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
