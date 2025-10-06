import axios from "axios";

export const BASE_URL = "http://localhost:5000/api";  // backend URL

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/auth/users`); // make sure this route exists
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
