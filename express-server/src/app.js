import express from "express";
import userRouter from "./routes/user.js"
import dashboardRouter from "./routes/dashboard.js"

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/dashboard", dashboardRouter)


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

export { app };
