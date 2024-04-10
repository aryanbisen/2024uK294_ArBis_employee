import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import { useState } from "react";
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
    if ((await EmployeeService().login(email, password)) == true) {
      console.log("logged in succesfully.");
      navigate("/../");
    }
  };

  console.log(email);
  console.log(password);

  return (
    <>
      <h1>Login Page</h1>
      <form name="form" action="../" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="filled-basic"
          label="E-mail"
          variant="filled"
        />
        <br />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="filled-basic"
          label="Password"
          variant="filled"
        />
        <br />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Submit
        </Button>
      </form>
    </>
  );
}

export default LoginPage;
