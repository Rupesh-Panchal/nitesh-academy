import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:5000/api",
});

export const signupAPI = (data) => API.post("/auth/signup", data);
export const loginAPI = (data) => API.post("/auth/login", data);
export const getUsersAPI = () => API.get("/admin/users");
export const getStatsAPI = () => API.get("/admin/stats");
export const deleteUserAPI = (id) => API.delete(`/admin/users/${id}`);

export default API;