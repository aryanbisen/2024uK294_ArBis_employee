import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import EmployeeService from "../../service/EmployeeService";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [APIData, setAPIData] = useState([]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    EmployeeService().login(email, password);
    if( await EmployeeService().login(email, password) == true){
      console.log("logged in succesfully.")
      navigate("/../");
    }
  };

  console.log(email);
  console.log(password);

  return (
    <>
      <form name="form" action="../" onSubmit={handleSubmit}>
        LoginPage
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="filled-basic"
          label="Filled"
          variant="filled"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="filled-basic"
          label="Filled"
          variant="filled"
        />
        <Button  type="submit" variant="contained" endIcon={<SendIcon />}>
          Submit
        </Button>
      </form>
    </>
  );
}

export default LoginPage;
