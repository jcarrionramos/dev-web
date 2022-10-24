import { app } from "./app.js";

// --- Routes --- //
import userRouter from "./routes/user.js"
import dashboardRouter from "./routes/dashboard.js"

const port = process.env.PORT || 3000;

app.use("/user", userRouter);
app.use("/dashboard", dashboardRouter)

app.get('/', (req, res) => {
  res.send("<h1>Server running</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
