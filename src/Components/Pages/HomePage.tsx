import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeService from "../../service/EmployeeService";
import LoginPage from "./LoginPage";

function HomePage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    EmployeeService()
      .getAllEmployees()
      .then((response) => {
        setAPIData(response);
        console.log(response);
      });
  }, []);


  
  return (
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
              <TableRow >
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.first_name}</TableCell>
                <TableCell>{data.gender}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default HomePage;
