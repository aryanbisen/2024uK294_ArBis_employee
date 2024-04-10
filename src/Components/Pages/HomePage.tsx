import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../service/EmployeeService";

function HomePage() {
  const [APIData, setAPIData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService()
      .getAllEmployees()
      .then((response) => {
        setAPIData(response);
      });
  }, []);

  function viewEmployee(employeeId: number) {
    navigate(`/employee/${employeeId}`);
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {APIData.map((data) => {
              return (
                <TableRow key={data.id} onClick={() => viewEmployee(data.id)}>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.first_name}</TableCell>
                  <TableCell>{data.gender}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default HomePage;
