import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { authenticate } from "./Authentification";

const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
  
  login: async (email: string, password: string) => {

    try {
      await authenticate(email, password);
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("No token.");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const data = await api.get("/employee", config);
      return true;
    } catch (error) {
      throw error;
    }
  },

  getAllEmployees: async () => {
const data = await api.get("/employee")
    return data["data"];
  },
});

export default EmployeeService;
