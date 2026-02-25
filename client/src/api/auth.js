import API from "./axios";

export const studentLogin = (data) =>
  API.post("/student/login", data);

export const adminLogin = (data) =>
  API.post("/admin/login", data);

export const adminSignup = (data) =>
  API.post("/admin/signup", data);