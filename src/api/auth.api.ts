import axios from "axios";
import { RegisterProps } from "../types/user.type";
import { LoginProps } from "../types/auth.type";

const api = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});

export const register = async ({ id, password, nickname }: RegisterProps) => {
  try {
    const response = await api.post("/register", {
      id,
      password,
      nickname,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting user data:", error);
    throw error;
  }
};

export const login = async ({ id, password }: LoginProps) => {
  try {
    const response = await api.post("/login?expiresIn=10m", {
      id,
      password,
    });

    localStorage.setItem("accessToken", response.data.accessToken);

    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};

export const getUser = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return;
  try {
    const response = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const updateProfile = async (formData: FormData) => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) return;

  try {
    const response = await api.patch("/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
