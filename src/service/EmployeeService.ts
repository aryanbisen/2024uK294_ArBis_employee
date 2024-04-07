import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { authenticate } from "./Authentification";

const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getEmployeeService: async () => {
    try {
      await authenticate("aryan@mail.com", "1234");
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
      console.log(data);
      return data["data"];
    } catch (error) {
      throw error;
    }
  },
});

export default EmployeeService;
