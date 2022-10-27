import jwt from "jsonwebtoken"

const getCurrentUser = async (req) => {
  const cookie = req.cookies[process.env.SESSION_COOKIE]

  if (!cookie) return null;

  try {
    const decodedJwt = await jwt.verify(cookie, process.env.JWT_SECRET_KEY);
    return decodedJwt;
  } catch (error) {
    return null;
  }
};

export default getCurrentUser