import jwt from "jsonwebtoken"

const jwtAutheticated = async (req, res, next) => {

  const cookie = req.cookies[process.env.SESSION_COOKIE]

  if (!cookie) {
    res.redirect("/user/login")
    return;
  }

  try {
    const token = await jwt.verify(cookie, process.env.JWT_SECRET_KEY);
    req.userId = token.userId;
    req.isAdmin = token.isAdmin;
  } catch (error) {
    res.redirect("/user/login");
    return error;
  }
  next();
};

export default jwtAutheticated