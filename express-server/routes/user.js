import express from "express";
const router = express.Router();

const DB = [
  {
    id: 1,
    name: "Javier",
    lastName: "Carrion",
    address: "Lala",
  },
  {
    id: 2,
    name: "Jonathan",
    lastName: "Frez",
    address: "Lolo",
  },
];

router.get("/", (req, res) => {
  res.render("user")
})

router.get("/:userId", (req, res) => {
  let object = undefined;

  for (let i = 0; i < DB.length; i = i + 1) {
    if (DB[i].id === parseInt(req.params.userId)) {
      object = DB[i];
      break;
    }
  }

  if (object === undefined) {
    res.send(`<h1>Usuario no encontrado</h1>`);
  } else {
    res.send(
      `<h1>Es está buscando al usuario: ${object.name} ${object.lastName} </h1>`
    );
  }
})

router.get("/js/:userId", (req, res) => {
  let object = DB.find((current) => {
    if (current.id === parseInt(req.params.userId)) return true;
  });



  if (object === undefined) {
    res.send(`<h1>Usuario no encontrado</h1>`);
  } else {
    res.render("user", {
      userName: `${object.name} ${object.lastName}`
    });
  }
});

router.post("/", (req, res) => {
  const body = req.body;
  DB.push(body);
  res.json({
    message: "user created",
    success: true
  })
})

export default router;