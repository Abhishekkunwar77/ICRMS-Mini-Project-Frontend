// fir-management-frontend/src/services/authService.js
import { api } from "./api";

const authService = {
  login: async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  },
  // ...other auth-related functions
};

export { authService };
