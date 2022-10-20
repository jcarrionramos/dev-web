import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  // res.send("<h1>Dashboard GET</h1>")
  res.render('main');
})

router.post("/", (req, res) => {
  res.send("<h1>Dashboard POST</h1>")
})

export default router;