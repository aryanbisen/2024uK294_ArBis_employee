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

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
const formik = useFormik({
  initialValues: {
    email: "",
    password: "",
  },
  validate,
  onSubmit: (values) => {
    handleSubmit(values.email, values.password);
  },
});
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
