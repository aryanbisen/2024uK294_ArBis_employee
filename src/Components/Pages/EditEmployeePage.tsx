import { useParams } from "react-router-dom";
import {
  CreateEmployeeProp,
  EmployeeProp,
  UpdateEmployeeProp,
} from "../Atoms/Employee";
import { SetStateAction, useEffect, useState } from "react";
import EmployeeService from "../../service/EmployeeService";
import { Field, Form, Formik } from "formik";

function EditEmployeePage() {
  const { employeeId } = useParams();
  const [APIData, setAPIData] = useState<EmployeeProp | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date);
  const [gender, setGender] = useState("");
  const [hireDate, setHireDate] = useState("");

  useEffect(() => {
    async function getEmployeeData() {
      const employee = await EmployeeService().getEmployeeById(
        Number(employeeId)
      );
       setFirstName(employee.first_name);
       setLastName(employee.last_name);
       setBirthDate(employee.birth_date);
       setGender(employee?.gender);
       setHireDate(employee?.hire_date);


      //setAPIData(employee);
    }

    getEmployeeData();
  }, [employeeId]);

  const updateOnClickHandler = async () => {
    console.log(firstName);
    
    await EmployeeService().updateEmployee(
      employeeId,
      firstName,
      lastName,
      birthDate,
      gender,
      hireDate
    );
  };

  const initialValues: EmployeeProp = {
    id: 0,
    first_name: "",
    last_name: "",
    birth_date: new Date(),
    gender: "",
    hire_date: new Date(),
  };

  const validateName = (value: string) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (value.length > 20) {
      error = "Name can't be over 20 letters";
    }
    return error;
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          updateOnClickHandler();
          //console.log(values);
          // await EmployeeService().updateEmployee(employeeData);
          // navigate("../");
        }}
        enableReinitialize={true}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="fist_name">First name:</label>
            <br />
            <Field
              value={firstName}
              onChange={(e: {
                target: { value: SetStateAction<EmployeeProp | null> };
              }) => setFirstName(e.target.value)}
              label="First name"
              type="Text"
              id="first_name"
              name="first_name"
              required
            />
            {errors.first_name && touched.first_name && (
              <div>{errors.first_name}</div>
            )}
            <br />
            <label htmlFor="last_name">Last name:</label>
            <br />
            <Field
              value={lastName}
              required
              label="Last name"
              onChange={(e: {
                target: { value: SetStateAction<EmployeeProp | null> };
              }) => setLastName(e.target.value)}
              type="Text"
              id="last_name"
              name="last_name"
              inputProps={{
                pattern: "[A-Za-z ]+",
              }}
            />
            {errors.last_name && touched.last_name && (
              <div>{errors.last_name}</div>
            )}
            <br />
            <label htmlFor="birth_date">Birth date:</label>
            <br />
            <Field
              value={birthDate}
              onChange={(e: {
                target: { value: SetStateAction<EmployeeProp | null> };
              }) => setBirthDate(e.target.value)}
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
              onChange={(e: {
                target: { value: SetStateAction<EmployeeProp | null> };
              }) => setGender(e.target.value)}
              value={gender}
              label="Gender"
              type="Text"
              id="gender"
              name="gender"
              required
              // validate={validateGender}
            />
            {errors.gender && touched.gender && <div>{errors.gender}</div>}
            <br />
            <label htmlFor="hire_date">Hire date:</label>
            <br />
            <Field
              onChange={(e: {
                target: { value: SetStateAction<EmployeeProp | null> };
              }) => setHireDate(e.target.value)}
              value={hireDate}
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

            <button onClick={() => updateOnClickHandler} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default EditEmployeePage;
