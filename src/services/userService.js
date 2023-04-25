import axios from "axios";
const BASE_URL = "https://tiny-pink-turkey-tutu.cyclic.app/";

const loginUser = async (creds) => {
  const foundUser = await axios.post(`${BASE_URL}/api/user`, creds);
  return foundUser
};

const registerUser = async () => {
  const newUser = await axios.post(`${BASE_URL}/api/user/register`)
  return newUser
}

export { loginUser, registerUser };
