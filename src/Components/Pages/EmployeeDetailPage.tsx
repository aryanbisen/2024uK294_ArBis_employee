import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../../service/EmployeeService";
import { EmployeeProp } from "../Atoms/Employee";

function EmployeeDetailPage() {
  //UseParams?
  const { employeeId } = useParams();
  //UseState is initialized with null in the beginning.
  const [APIData, setAPIData] = useState<EmployeeProp | null>(null);
  console.log(employeeId);

  useEffect(() => {
    async function getEmployeeData() {
      const employee = await EmployeeService().getEmployeeById(
        Number(employeeId)
      );

      setAPIData(employee);
    }

    getEmployeeData();
  }, [employeeId]);
  console.log(APIData);

  if (APIData == null) {
    return (
      <>
        <h1>Product doesn't exist.</h1>
      </>
    );
  }
  return (
    <div>
      <h2>{APIData.first_name} detail page</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-read-only-input"
          label="First name"
          defaultValue={APIData.first_name}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Last name"
          defaultValue={APIData.last_name}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Birth date"
          defaultValue={APIData.birth_date}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Gender"
          defaultValue={APIData.gender}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Hire date"
          defaultValue={APIData.hire_date}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
    </div>
  );
}
export default EmployeeDetailPage;
