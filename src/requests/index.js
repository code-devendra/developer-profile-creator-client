import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const getAllDevelopers = (search = "") => {
  return axios.get(`${API_BASE_URL}?search=${search}`);
};

export const createDeveloper = (payload) => {
  return axios.post(API_BASE_URL, payload);
};

export const getDeveloper = (id) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};
