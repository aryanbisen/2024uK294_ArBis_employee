import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { authenticate } from "./Authentification";
import { CreateEmployeeProp, EmployeeProp } from "../Components/Atoms/Employee";

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
    const data = await api.get("/employee");
    return data["data"];
  },

  getEmployeeById: async (employeeId: number): Promise<EmployeeProp | null> => {
    const data = await api.get<EmployeeProp>(`/employee/${employeeId}`);
    return data["data"];
  },

  deleteEmployee: async (employeeId: number): Promise<void> => {
    await api.delete(`employee/${employeeId}`);
    window.location.reload();
  },
  createEmployee: async (APIData: CreateEmployeeProp): Promise<void> => {
    await api.post("employee", APIData);
    alert("Successfully created employee");
  },
  updateEmployee: async (employeeId, first_name, last_name, birth_date, gender, hire_date): Promise<void> => {
    const APIData = {first_name,
      last_name,
      birth_date,
      gender,
      hire_date};
    await api.put(`employee/${employeeId}`, APIData);
    alert("Successfully updated employee");
  },
});

export default EmployeeService;
