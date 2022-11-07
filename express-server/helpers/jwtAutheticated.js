import jwt from "jsonwebtoken";

const jwtAutheticated = (req, res, next) => {
  const cookie = req.cookies[process.env.SESSION_COOKIE];

  if (!cookie) {
    res.redirect("/user/login");
    return;
  }

  try {
    jwt.verify(cookie, process.env.JWT_SECRET_KEY);
  } catch (error) {
    res.redirect("/user/login");
    return error;
  }
  next();
};

export default jwtAutheticated;
