import express from "express";
const router = express.Router();

const DB = [
  {
    id: 1,
    name: "Javier",
    lastName: "Carrion",
    age: 26,
    address: "Lala",
  },
  {
    id: 2,
    name: "Jonathan",
    lastName: "Frez",
    age: 20,
    address: "Lolo",
  },
];

router.get("/", (req, res) => {
  res.render("user")
})

router.get("/find/:userId", (req, res) => {
  let object = DB.find((current) => {
    if (current.id === parseInt(req.params.userId)) return true;
  });

  let userName = null;
  if (object) {
    userName = `${object.name} ${object.lastName}`;
  }

  res.render("src/user/user", {
    userName: userName,
    userFound: !!object
  });
});

router.get("/list_all", (req, res) => {
  res.render("src/user/listAll", { users: DB, style: "listAll.css" })
})

router.get("/create", (req, res) => {
  res.render("src/user/create")
})

router.post("/create", (req, res) => {
  const body = req.body;
  console.log("lala", body.name)

  // DB.push(body);
  res.render("src/user/create")
})

export default router;