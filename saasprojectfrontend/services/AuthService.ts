import axios from "axios";

export const signUpUser = async (email: string, password: string) => {
  try {
    const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
      email,
      password,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
      email,
      password,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async (token: string) => {
  try {
    const res = await axios.get("http://localhost:8080/api/v1/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
