import express from "express";
const router = express.Router();

const DB = [
  {
    id: 1,
    name: "Javier",
    lastName: "Carrion",
    age: 26,
    address: "Atahualpa 235",
  },
  {
    id: 2,
    name: "Jonathan",
    lastName: "Frez",
    age: 30,
    address: "Ejercito 443",
  }, {
    id: 3,
    name: "Juanito",
    lastName: "Perez",
    age: 15,
    address: "No sabemos"
  },
  {
    id: 4,
    name: "Canela",
    lastName: "FIC",
    age: 15,
    address: "Ejercito 443"
  }
];

router.get("/", (req, res) => {
  res.render("src/user/findUser")
})

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

router.get("/list_all", (req, res) => {
  res.render("src/user/listAll", {
    users: DB
  })
})

router.get("/create", (req, res) => {
  res.render("src/user/createUser")
})

router.post("/create", (req, res) => {
  const body = req.body;

  const lastRecordCreated = DB.slice(-1);
  body.id = lastRecordCreated.id + 1;
  DB.push(body)

  res.render("src/user/createUser")
})

router.post("/", (req, res) => {
  const body = req.body;
  DB.push(body);
  res.json({
    message: "user created",
    success: true
  })
})

export default router;