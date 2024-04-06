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

export interface EmployeeProp{
  id : Number;
  birth_date : Date;
  first_name: String;
  last_name : String;
  gender : String;
  hire_date : Date;
}
function Employee() {



  return (
    <>
      <TableRow
        onClick={() => navigate("view/:id")}
        key={employee.last_name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        selected={selectedIndex === index}
      >
        <TableCell component="th" scope="row">
          {employee.last_name}
        </TableCell>
        <TableCell align="right">{employee.gender}</TableCell>
      </TableRow>
    </>
  );
}

export default Employee;
