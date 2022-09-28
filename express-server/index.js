const express = require("express");
const app = express();
const port = 3300;

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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/user/:userId", (req, res) => {
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
      `<h1>Es está buscando un usuario: ${object.name} ${object.lastName} </h1>`
    );
  }
});

app.get("/userJS/:userId", (req, res) => {
  let object = DB.find((current) => {
    if (current.id === parseInt(req.params.userId)) return true;
  });

  if (object === undefined) {
    res.send(`<h1>Usuario no encontrado</h1>`);
  } else {
    res.send(
      `<h1>Es está buscando un usuario: ${object.name} ${object.lastName} </h1>`
    );
  }
});

// Ejemplo de funciones en Javascript
const prueba1 = (response) => {
  response.send(`<h1>Prueba 1</h1>`);
};

const prueba2 = (response) => {
  response.send(`<h1>Prueba 2</h1>`);
};

const wrapper = (response) => {
  console.log("Acá estoy en la función prueba2");

  const prueba3 = (response) => {
    response.send(`<h1>Prueba 3</h1>`);
  };

  prueba2(response);
};

const wrapper2 = (response) => {
  console.log("Acá estoy en la función prueba2");

  const miVariable = "Javier";

  const prueba3 = (response) => {
    response.send(`<h1>Prueba 3 - ${miVariable}</h1>`);
  };

  prueba3(response);
};

app.get("/example", (req, res) => {
  wrapper(res, prueba2);
});

app.get("/example2", (req, res) => {
  wrapper2(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
