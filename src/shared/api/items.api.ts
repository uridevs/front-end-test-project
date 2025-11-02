import axios from "axios";

export const itemsApi = axios.create({
  baseURL: "https://itx-frontend-test.onrender.com",
});