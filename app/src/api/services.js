import { http } from "./http";

const baseUrl = process.env.REACT_APP_API_URL;

const handleError = (error) => {
  console.error(error);
  throw error;
};

const signUpApi = (email, password) => {
  return http
    .post(`${baseUrl}/user/login`, {
      email,
      password,
    })
    .then(({ data }) => data)
    .catch(handleError);
};

export { signUpApi };
