import express from "express";
import * as handlebars from "express-handlebars"
import path from "path";

import userRouter from "./routes/user.js"
import dashboardRouter from "./routes/dashboard.js"

const app = express();

app.set("view engine", 'hbs')
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: `${__dirname}/views/partials`,
  defaultLayout: 'index'
}))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use("/user", userRouter);
app.use("/dashboard", dashboardRouter)

app.get('/', (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

export { app };
