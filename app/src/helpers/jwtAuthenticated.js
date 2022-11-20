import { getCookie } from "../helpers/cookies";

const jwtAuthenticated = () => {
  const jwt = getCookie(process.env.REACT_APP_JWT_KEY);
  return jwt ? true : false;
};

export { jwtAuthenticated };
