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

function HomePage() {
  const [APIData, setAPIData] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyeWFuQG1haWwuY29tIiwiaWF0IjoxNzEyNDA1MzczLCJleHAiOjE3MTI0MDg5NzMsInN1YiI6IjIifQ.lcMLs-WjmVofRJEM3qXxPDLe2v2rn3WI4oQI4_gyRcM";

  useEffect(() => {
    EmployeeService()
      .getEmployeeService()
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
              <TableRow>
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
