import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getEmployeeService: async () => {
    const data = await api.get("/employee");
    console.log(data)
    return data["data"];
  },
});

export default EmployeeService