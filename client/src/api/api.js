import axios from "axios";

const API = axios.create({baseURL: import.meta.env.VITE_API_URL,});

export const signupAPI = (data) => API.post("/auth/signup", data);
export const loginAPI = (data) => API.post("/auth/login", data);
export const getUsersAPI = () => API.get("/admin/users");
export const getStatsAPI = () => API.get("/admin/stats");
export const deleteUserAPI = (id) => API.delete(`/admin/users/${id}`);
export const getAchieversAPI = () => API.get("/achievers");
export const addAchieverAPI = (data) => API.post("/achievers/add", data);
export const editAchieverAPI = (data) => API.post("/achievers/edit", data);
export const deleteAchieverAPI = (id) => API.delete(`/achievers/${id}`);
export const reorderAchieversAPI = (list) => API.post("/achievers/reorder", { list });

export default API;