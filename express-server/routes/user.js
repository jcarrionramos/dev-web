import express from "express";
import jwt from "jsonwebtoken"
import jwtAutheticated from "../helpers/jwtAutheticated.js";
import getCurrentUser from "../helpers/getCurrentUser.js";

const router = express.Router();

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
  }, {
    id: 3,
    email: "jperez@gmail.com",
    password: "zzz",
    name: "Juanito",
    lastName: "Perez",
    age: 15,
    address: "No sabemos"
  },
  {
    id: 4,
    email: "canelita@gmail.com",
    password: "aaa",
    name: "Canela",
    lastName: "FIC",
    age: 15,
    address: "Ejercito 443"
  }
];

router.get("/find/:userId", (req, res) => {
  let object = DB.find((current) => {
    if (current.id === parseInt(req.params.userId)) return true;
  });

  let userName = null;
  if (object) {
    userName = `${object.name} ${object.lastName}`
  }

  res.render("src/user/findUser", {
    userName: userName,
    style: "findUser.css"
  });
});

router.get("/list_all", jwtAutheticated, async (req, res) => {
  const currentUser = await getCurrentUser(req)

  console.log("currentUser", currentUser)

  res.render("src/user/listAll", {
    users: DB
  })
})

router.get("/login", (req, res) => {
  res.render("src/user/login")
})

router.post("/login", (req, res) => {
  const body = { ...req.body };

  const currentUser = DB.find((current) => current.email === body.email)

  if (!currentUser || currentUser.password !== body.password) {
    res.send("Usuario o contraseña incorrecta");
    return;
  }

  const signedJWT = jwt.sign(currentUser, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })

  res.cookie(process.env.SESSION_COOKIE, signedJWT).redirect("list_all")
})

router.get("/create", (req, res) => {
  res.render("src/user/createUser")
})

router.post("/create", (req, res) => {
  const body = { ...req.body };

  const lastRecordCreated = DB.slice(-1)[0];
  body.id = lastRecordCreated.id + 1;

  console.log("lastRecordCreated", lastRecordCreated)
  console.log("body", body)

  DB.push(body)

  res.render("src/user/createUser")
})

export default router;