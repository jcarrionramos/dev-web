import express from "express";
import * as handlebars from "express-handlebars";
import * as dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

var cors = require("cors");

dotenv.config();

const app = express();

app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
    defaultLayout: "index",
  })
);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongo Database");
  })
  .catch((error) => {
    console.error(`Conection refused: ${error}`);
  });

export { app };
