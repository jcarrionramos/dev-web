import express from "express";
import jwt from "jsonwebtoken";
import jwtAutheticated from "../helpers/jwtAutheticated.js";
import getCurrentUser from "../helpers/getCurrentUser.js";
import User from "../models/user.js";

const router = express.Router();

router.get("/find/:userId", (req, res) => {
  let object = DB.find((current) => {
    if (current.id === parseInt(req.params.userId)) return true;
  });

  let userName = null;
  if (object) {
    userName = `${object.name} ${object.lastName}`;
  }

  res.render("src/user/findUser", {
    userName: userName,
    style: "findUser.css",
  });
});

router.get("/list_all", jwtAutheticated, async (req, res) => {
  const currentUser = await getCurrentUser(req);

  console.log("currentUser", currentUser);

  res.render("src/user/listAll", {
    users: [],
  });
});

router.get("/login", (req, res) => {
  res.render("src/user/login");
});

router.post("/login", async (req, res) => {
  const body = { ...req.body };

  const currentUser = await User.findOne({ email: body.email });

  if (!currentUser || currentUser.password !== body.password) {
    res.send("Usuario o contraseña incorrecta");
    return;
  }

  const signedJWT = jwt.sign(
    {
      id: currentUser.id,
      email: currentUser.email,
      lastName: currentUser.name,
      lastName: currentUser.lastName,
      lastName: currentUser.age,
      lastName: currentUser.address,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );

  res.cookie(process.env.SESSION_COOKIE, signedJWT).redirect("list_all");
});

router.get("/create", (req, res) => {
  res.render("src/user/createUser");
});

router.post("/create", async (req, res) => {
  const body = { ...req.body };
  await User.create(body);
  res.render("src/user/createUser");
});

export default router;
