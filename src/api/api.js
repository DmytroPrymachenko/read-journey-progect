import axios from "axios";

export const api = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

export function setToken(token) {
  api.defaults.headers.authorization = `Bearer ${token}`;
}

export function clearToken() {
  api.defaults.headers.authorization = ``;
}
