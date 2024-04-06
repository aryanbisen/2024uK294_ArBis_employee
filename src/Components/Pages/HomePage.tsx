import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import Employee from "../Atoms/Employee";

function HomePage() {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const navigate = useNavigate();

  const [employees, setEmployees] = React.useState([
    {
      id: 10001,
      birth_date: "1953-09-02",
      first_name: "Georgi",
      last_name: "Facello",
      gender: "M",
      hire_date: "1986-06-26",
    },
    {
      id: 10002,
      birth_date: "1964-06-02",
      first_name: "Bezalel",
      last_name: "Simmel",
      gender: "F",
      hire_date: "1985-11-21",
    },
    {
      id: 10003,
      birth_date: "1959-12-03",
      first_name: "Parto",
      last_name: "Bamford",
      gender: "M",
      hire_date: "1986-08-28",
    },
    {
      id: 10004,
      birth_date: "1954-05-01",
      first_name: "Chirstian",
      last_name: "Koblick",
      gender: "M",
      hire_date: "1986-12-01",
    },
    {
      id: 10005,
      birth_date: "1955-01-21",
      first_name: "Kyoichi",
      last_name: "Maliniak",
      gender: "M",
      hire_date: "1989-09-12",
    },
  ]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Last Name</TableCell>
              <TableCell align="right">Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <Employee/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default HomePage;
