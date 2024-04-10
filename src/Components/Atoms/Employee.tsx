export type EmployeeProp = {
  id: Number;
  birth_date: Date;
  first_name: String;
  last_name: String;
  gender: String;
  hire_date: Date;
};

export type CreateEmployeeProp = {
  first_name: string;
  last_name: string;
  birth_date: string;
  gender: string;
  hire_date: string;
};

export type UpdateEmployeeProp = {
  id: number;
 first_name: string;
  last_name: string;
  birth_date: string;
  gender: string;
  hire_date: string;
};
function Employee() {
  return <></>;
}

export default Employee;
