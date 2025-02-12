import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { CreateEmployeeProp } from "../Atoms/Employee";
import EmployeeService from "../../service/EmployeeService";

function CreateEmployeePage() {
  const initialValues: CreateEmployeeProp = {
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    hire_date: "",
  };

  const navigate = useNavigate();

  const validateName = (value: string) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (value.length > 20) {
      error = "Name can't be over 20 letters";
    } else if (!/[A-Za-z ]+/.test(value)) {
      error = "Only letters allowed";
    }
    return error;
  };

  const validateGender = (value: string) => {
    let error;

    if (value.toUpperCase() == "F" || value.toUpperCase() == "M") {
    } else {
      error = "Please Enter M or F";
    }
    return error;
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (employeeData) => {
          await EmployeeService().createEmployee(employeeData);
          navigate("../");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="first_name">First name:</label>
            <br />
            <Field
              label="First name"
              type="Text"
              id="first_name"
              name="first_name"
              required
              validate={validateName}
            />
            {errors.first_name && touched.first_name && (
              <div>{errors.first_name}</div>
            )}
            <br />
            <label htmlFor="last_name">Last name:</label>
            <br />
            <Field
              required
              label="Last name"
              type="Text"
              id="last_name"
              name="last_name"
              validate={validateName}
            />
            {errors.last_name && touched.last_name && (
              <div>{errors.last_name}</div>
            )}
            <br />
            <label htmlFor="birth_date">Birth date:</label>
            <br />
            <Field
              label="Birth date"
              type="date"
              id="birth_date"
              name="birth_date"
              required
            />
            {errors.birth_date && touched.birth_date && (
              <div>{errors.birth_date}</div>
            )}
            <br />
            <label htmlFor="gender">Gender(M/F):</label>
            <br />
            <Field
              label="Gender"
              type="Text"
              id="gender"
              name="gender"
              required
              validate={validateGender}
            />
            {errors.gender && touched.gender && <div>{errors.gender}</div>}
            <br />
            <label htmlFor="hire_date">Hire date:</label>
            <br />
            <Field
              label="Hire date"
              type="date"
              id="hire_date"
              name="hire_date"
              required
            />
            {errors.hire_date && touched.hire_date && (
              <div>{errors.hire_date}</div>
            )}
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default CreateEmployeePage;
